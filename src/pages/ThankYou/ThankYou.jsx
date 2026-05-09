import ThankYouConfirmation from '../../sections/ThankYou/ThankYouConfirmation';
import NextSteps from '../../sections/ThankYou/NextSteps';
import PostSubmitEngagement from '../../sections/ThankYou/PostSubmitEngagement';
import ReviewRequest from '../../sections/ThankYou/ReviewRequest';

function ThankYou() {
  return (
    <>
      <ThankYouConfirmation />
      <NextSteps />
      <PostSubmitEngagement />
      <ReviewRequest />
    </>
  );
}

export default ThankYou;
