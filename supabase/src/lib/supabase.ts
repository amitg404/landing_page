import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eiojymriaagwjfwlnxcz.supabase.co'
// Using legacy anon key as requested
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpb2p5bXJpYWFnd2pmd2xueGN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5OTA1NjEsImV4cCI6MjA4NDU2NjU2MX0.wy-z2p_Xfq7VK6235WvLje5NcP4fV9yNF7s53vAMRV0'

export const supabase = createClient(supabaseUrl, supabaseKey)
