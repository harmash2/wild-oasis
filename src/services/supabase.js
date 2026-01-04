import { createClient } from '@supabase/supabase-js'

// export const supabeseAPI = createClient('https://xjiljdyeooqokoaslsdp.supabase.co')

export const supabaseUrl = 'https://xjiljdyeooqokoaslsdp.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqaWxqZHllb29xb2tvYXNsc2RwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUxNzQxMDMsImV4cCI6MjA4MDc1MDEwM30.nQmPQRB6kDN1XBzeA-Wh9yuBcfS45B2cJouqF5eU174'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
