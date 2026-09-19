import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ComingSoon from '../src/pages/ComingSoon.jsx';
import PrivacyPolicy from '../src/sub-pages/PrivacyPolicy.jsx';
import HelpCenter from '../src/sub-pages/HelpCenter.jsx';
import TermsServices from '../src/sub-pages/TermsServices.jsx';
import TrustSecurity from '../src/sub-pages/TrustSecurity.jsx';

function App() {
  return (
    <Routes>
      {/* Main */}
      <Route path="/" element={<ComingSoon />} />

      {/* Legal & Support Pages */}
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/help" element={<HelpCenter />} />
      <Route path="/terms" element={<TermsServices />} />
      <Route path="/trust" element={<TrustSecurity />} />


      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;