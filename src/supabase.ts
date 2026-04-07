import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jbihqjtocjeyixlcfeac.supabase.co';
const supabaseAnonKey = 'sb_publishable_7B8q0aC3DipUcUmJp_U_Zg_rv_xmXui';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
