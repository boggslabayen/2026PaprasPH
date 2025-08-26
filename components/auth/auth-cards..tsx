import { BackButton } from "./back-button";
import { manrope, roboto } from "@/app/ui/fonts/fonts";
import Socials from "./socials";

type CardWrapperProps = {
  children: React.ReactNode;
  cardTitle: string;
  backButtonHref: string;
  backButtonLabel: string;
  showSocials?: boolean;
};

export const AuthCard = ({
  children,
  cardTitle,
  backButtonHref,
  backButtonLabel,
  showSocials,
}: CardWrapperProps) => {
  return (
    <main className="border-2 border-gray-100 rounded-lg shadow-lg p-6 max-w-md mx-auto my-10 bg-ffffff">
      {/* Card Header */}
      <div>
        {/* Card Title */}
        <div className={`${manrope.className} text-center font-black `}>
          {cardTitle}
        </div>
      </div>
      {/* Card Content */}
      <div>{children}</div>
      {showSocials && (
        // Card Footer with Socials
        <div>
          <Socials />
        </div>
      )}
      {/* Card Footer for Back Button */}
      <div className={`${manrope.className} text-center mt-8`}>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </div>
    </main>
  );
};
