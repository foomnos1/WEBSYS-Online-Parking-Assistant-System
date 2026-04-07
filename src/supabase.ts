import { createClient } from '@supabase/supabase-js';

<<<<<<< HEAD
const supabaseUrl = 'https://jbihqjtocjeyixlcfeac.supabase.co';
const supabaseAnonKey = 'sb_publishable_7B8q0aC3DipUcUmJp_U_Zg_rv_xmXui';
=======
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
>>>>>>> 075f609c5742ad2b693f01fef708e44a162f109f

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
