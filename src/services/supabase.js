import { createClient } from "@supabase/supabase-js";



export const supabaseUrl = 'https://ycrismjtbclwqsozbqjg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljcmlzbWp0YmNsd3Fzb3picWpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwNDMxOTAsImV4cCI6MjA3MTYxOTE5MH0.x8QfwUgry_IvvhBm6IVuW4ahm-L4f5gG7w2NyIEZ0kA'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;