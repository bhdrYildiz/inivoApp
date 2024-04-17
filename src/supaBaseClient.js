import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://uaxdzfsbondctsfgpwrt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVheGR6ZnNib25kY3RzZmdwd3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5MjA3NDIsImV4cCI6MjAyNjQ5Njc0Mn0.nKQGQvQRMd5F5V4TKc-ptUR5DHSf7IggmUuXf2KsAh0";

export const supabase = createClient(supabaseUrl, supabaseKey);