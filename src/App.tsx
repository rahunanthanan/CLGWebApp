import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthProvider from "./contexts/Auth";
import Authorized from "./guards/Authorized";
import Guest from "./guards/Guest";
import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Admission from "./pages/Admission";
import UploadDocuments from "./pages/UploadDocuments/UploadDocuments";
import Payment from "./pages/Payment/Payment";
import Review from "./pages/Review";
import ProfileList from "./pages/Profiles/ProfileList";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Authorized children={<AppLayout />} />}>
              <Route path="/" element={<Admission />} />
              <Route path="/upload" element={<UploadDocuments />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/review" element={<Review />} />
              <Route path="/profiles" element={<ProfileList />} />
            </Route>

            <Route element={<Guest children={<AuthLayout />} />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
