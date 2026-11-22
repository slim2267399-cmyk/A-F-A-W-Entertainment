
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://ellaomphcjlxkdvtgwrl.supabase.co';
const SUPABASE_KEY = 'sb_publishable_-fjbaBzkgRYLBCQHLjUJKA_PtpEyufY';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const message = document.getElementById('authMessage');

function showMessage(text, isError = false) {
    if (!message) return;
    message.textContent = text;
    message.style.color = isError ? '#ff7777' : '#e5c76b';
}

function getNextPage() {
    const next = new URLSearchParams(window.location.search).get('next');

    if (next && next.endsWith('.html') && !next.includes('://')) {
        return next;
    }

    return 'index.html';
}

// LOGIN
const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const button = document.getElementById('loginButton');
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        button.disabled = true;
        button.textContent = 'PLEASE WAIT...';
        showMessage('Logging you in...');

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            showMessage('Login successful! Welcome back.');
            window.location.href = getNextPage();

        } catch (error) {
            showMessage(error.message, true);
            button.disabled = false;
            button.textContent = 'LOGIN';
        }
    });
}

// SIGNUP
const signupForm = document.getElementById('signupForm');

if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const button = document.getElementById('signupButton');
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password.length < 8) {
            showMessage('Password must be at least 8 characters.', true);
            return;
        }

        if (password !== confirmPassword) {
            showMessage('Passwords do not match. Please try again.', true);
            return;
        }

        button.disabled = true;
        button.textContent = 'CREATING ACCOUNT...';
        showMessage('Creating your account...');

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: window.location.origin +
                        window.location.pathname.replace(/signup\.html$/, 'login.html')
                }
            });

            if (error) throw error;

            if (data.session) {
                showMessage('Account created successfully!');
                window.location.href = 'index.html';
            } else {
                showMessage('Account created! Please check your email and confirm your account, then log in.');
                button.disabled = false;
                button.textContent = 'CREATE ACCOUNT';
            }

        } catch (error) {
            showMessage(error.message, true);
            button.disabled = false;
            button.textContent = 'CREATE ACCOUNT';
        }
    });
}
