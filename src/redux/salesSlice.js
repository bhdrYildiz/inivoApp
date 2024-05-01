import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supaBaseClient";

const initialState = {
  orders: [],
};

export const SaleProduct = createAsyncThunk(
  "/Sale",
  async ({ productId, count, created_at }) => {
    try {
      const { data, error } = await supabase.from("sales").insert({
        product_id: productId,
        created_at: created_at,
        count: count,
      });
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Hata:", error.message);
      return null;
    }
  }
);
export const AllOrders = createAsyncThunk("/Orders", async () => {
  try {
    const { data } = await supabase
      .from("sales")
      .select()
      .gt("count", 0)
      .order("count", { ascending: true });

    return data;
  } catch (error) {
    console.error("Hata:", error.message);
    return null;
  }
});
const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SaleProduct.fulfilled, (state, action) => {
        return {
          sale: action.payload,
          loading: false,
          error: false,
        };
      })
      .addCase(SaleProduct.pending, (state, action) => {
        return {
          loading: true,
          error: false,
        };
      })
      .addCase(SaleProduct.rejected, (state, action) => {
        return {
          loading: false,
          error: action.payload.error,
        };
      })
      .addCase(AllOrders.fulfilled, (state, action) => {
        return {
          ...state,
          orders: action.payload,
          error: false,
          loading: false,
        };
      })
      .addCase(AllOrders.pending, (state, action) => {
        return {
          loading: true,
          error: false,
        };
      })
      .addCase(AllOrders.rejected, (state, action) => {
        return {
          error: true,
        };
      });
  },
});

export const selectSales = (state) => state.sales;
export default salesSlice.reducer;
