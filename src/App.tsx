import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import OnboardingLandingPage from "./pages/OnboardingLandingPage";
import OnboardingFlowPhoneNumberEmpty from "./pages/OnboardingFlowPhoneNumber";
import OnboardingFlowOtpEmpty from "./pages/OnboardingFlowOtpEmpty";
import OnboardingFlowNameSurnameEmpty from "./pages/OnboardingFlowNameSurnameEmpty";
import OnboardingFlowUploadPicture from "./pages/OnboardingFlowUploadPicture";
import OnboardingFlowEmailAddress from "./pages/OnboardingFlowEmailAddress";
import OnboardingWelcomeAndPrivacy from "./pages/OnboardingWelcomeAndPrivacy";
import OnboardingFlowBodyInfoEmpt from "./pages/OnboardingFlowBodyInfoEmpt";
import Homepage from "./pages/Homepage";
import CashbackPageNotSetup from "./pages/CashbackPageNotSetup";
import VenmoSetup from "./pages/VenmoSetup";
import CashbackPageEmptyState from "./pages/CashbackPageEmptyState";
import GloriaStartingPage from "./pages/GloriaStartingPage";
import MealItemsDetails from "./pages/MealItemsDetails";
import OnboardingFlowAllergensNot from "./pages/OnboardingFlowAllergensNot";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/onboardingflowphonenumberempty":
        title = "";
        metaDescription = "";
        break;
      case "/onboardingflowotpempty":
        title = "";
        metaDescription = "";
        break;
      case "/onboardingflownamesurnameempty":
        title = "";
        metaDescription = "";
        break;
      case "/onboardingflowuploadpicture":
        title = "";
        metaDescription = "";
        break;
      case "/onboardingflowemailaddressempty":
        title = "";
        metaDescription = "";
        break;
      case "/onboardingwelcomeandprivacy":
        title = "";
        metaDescription = "";
        break;
      case "/onboardingflowbodyinfoempty":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/cashbackpagenotsetup":
        title = "";
        metaDescription = "";
        break;
      case "/venmosetup":
        title = "";
        metaDescription = "";
        break;
      case "/cashback-page-empty-state":
        title = "";
        metaDescription = "";
        break;
      case "/gloriastartingpage":
        title = "";
        metaDescription = "";
        break;
      case "/mealitemsdetails":
        title = "";
        metaDescription = "";
        break;
      case "/onboardingflowallergensnotselected":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<OnboardingLandingPage />} />
      <Route
        path="/onboardingflowphonenumberempty"
        element={<OnboardingFlowPhoneNumberEmpty />}
      />
      <Route
        path="/onboardingflowotpempty"
        element={<OnboardingFlowOtpEmpty />}
      />
      <Route
        path="/onboardingflownamesurnameempty"
        element={<OnboardingFlowNameSurnameEmpty />}
      />
      <Route
        path="/onboardingflowuploadpicture"
        element={<OnboardingFlowUploadPicture />}
      />
      <Route
        path="/onboardingflowemailaddressempty"
        element={<OnboardingFlowEmailAddress />}
      />
      <Route
        path="/onboardingwelcomeandprivacy"
        element={<OnboardingWelcomeAndPrivacy />}
      />
      <Route
        path="/onboardingflowbodyinfoempty"
        element={<OnboardingFlowBodyInfoEmpt />}
      />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/cashbackpagenotsetup" element={<CashbackPageNotSetup />} />
      <Route path="/venmosetup" element={<VenmoSetup />} />
      <Route
        path="/cashback-page-empty-state"
        element={<CashbackPageEmptyState />}
      />
      <Route path="/gloriastartingpage" element={<GloriaStartingPage />} />
      <Route path="/mealitemsdetails" element={<MealItemsDetails />} />
      <Route
        path="/onboardingflowallergensnotselected"
        element={<OnboardingFlowAllergensNot />}
      />
    </Routes>
  );
}
export default App;
