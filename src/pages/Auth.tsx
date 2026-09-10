import React, { useState } from 'react';
import { LogIn, UserPlus, HelpCircle } from 'lucide-react';

interface AuthProps {
  initialMode?: 'signin' | 'signup' | 'forgot';
  onNavigate: (path: string, params?: any) => void;
}

export const Auth: React.FC<AuthProps> = ({ initialMode = 'signin', onNavigate }) => {
  const [mode, setMode] = useState<'signin' | 'signup' | 'forgot'>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMsg("Success. Session initialized. Redirecting to intelligence feed...");
    setTimeout(() => {
      onNavigate('/');
    }, 1500);
  };

  return (
    <div id="authentication-hub-page" className="py-10 flex justify-center items-center min-h-[65vh]">
      <div className="w-full max-w-sm bg-[#111F31] border border-[#1E334D] p-6 rounded-lg space-y-5 shadow-lg">
        {/* LOGO TITLE */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#19C37D] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
            <span className="uppercase tracking-wider text-[10px]">Touchline IQ Account</span>
          </div>
          
          <h2 className="text-xl font-bold text-[#F0F4F8] tracking-tight">
            {mode === 'signin' && 'Sign In'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'forgot' && 'Reset Password'}
          </h2>
          
          <p className="text-xs text-[#8FA0B5]">
            {mode === 'signin' && 'Access match intelligence, custom alerts, and model telemetry.'}
            {mode === 'signup' && 'Register your profile to track preferred leagues and match predictions.'}
            {mode === 'forgot' && 'Enter your account email to receive recovery instructions.'}
          </p>
        </div>

        {successMsg && (
          <div className="bg-[#112720] border border-[#1B4D3E] p-3 rounded text-xs text-[#19C37D] text-center font-medium">
            {successMsg}
          </div>
        )}

        {/* FORMS */}
        <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">Full Name</label>
              <input
                type="text"
                placeholder="Alex Turner"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0B1624] border border-[#1E334D] focus:border-[#19C37D] rounded px-3 py-2 text-xs text-[#F0F4F8] focus:outline-none placeholder-[#64748B] transition-colors"
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">Email Address</label>
            <input
              type="email"
              placeholder="alex@touchlineiq.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0B1624] border border-[#1E334D] focus:border-[#19C37D] rounded px-3 py-2 text-xs text-[#F0F4F8] focus:outline-none placeholder-[#64748B] transition-colors"
            />
          </div>

          {mode !== 'forgot' && (
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-bold text-[#8FA0B5] uppercase tracking-wider block">Password</label>
                {mode === 'signin' && (
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-[10px] text-[#4EA1FF] hover:underline font-semibold focus:outline-none cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <input
                type="password"
                placeholder="••••••••••••"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0B1624] border border-[#1E334D] focus:border-[#19C37D] rounded px-3 py-2 text-xs text-[#F0F4F8] focus:outline-none placeholder-[#64748B] transition-colors"
              />
            </div>
          )}

          {mode === 'signup' && (
            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                required
                id="agree-checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 rounded accent-[#19C37D] focus:outline-none"
              />
              <label htmlFor="agree-checkbox" className="text-[11px] text-[#8FA0B5] select-none">
                I understand that projections are statistical estimates, and I agree to Touchline IQ terms.
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2.5 bg-[#19C37D] hover:bg-[#15A86B] text-[#07111F] font-bold text-xs tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-2"
          >
            {mode === 'signin' && (
              <>
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </>
            )}
            {mode === 'signup' && (
              <>
                <UserPlus className="w-3.5 h-3.5" />
                <span>Create Account</span>
              </>
            )}
            {mode === 'forgot' && (
              <>
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Send Reset Link</span>
              </>
            )}
          </button>
        </form>

        {/* BOTTOM LINKS */}
        <div className="border-t border-[#1A2C42] pt-3 flex justify-between text-xs text-[#8FA0B5]">
          {mode === 'signin' && (
            <>
              <span>New to Touchline IQ?</span>
              <button onClick={() => setMode('signup')} className="text-[#4EA1FF] hover:underline font-semibold focus:outline-none cursor-pointer">
                Create Account
              </button>
            </>
          )}

          {mode === 'signup' && (
            <>
              <span>Have an account?</span>
              <button onClick={() => setMode('signin')} className="text-[#4EA1FF] hover:underline font-semibold focus:outline-none cursor-pointer">
                Sign In
              </button>
            </>
          )}

          {mode === 'forgot' && (
            <div className="w-full text-center">
              <button onClick={() => setMode('signin')} className="text-[#4EA1FF] hover:underline font-semibold focus:outline-none cursor-pointer">
                Back to Sign In
              </button>
            </div>
          )}
        </div>

        {/* Footnote */}
        <div className="text-[10px] text-[#64748B] text-center">
          Projections are mathematical estimates and not guarantees.
        </div>
      </div>
    </div>
  );
};
