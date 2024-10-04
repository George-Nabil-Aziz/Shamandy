// Flowbite
import { Footer } from "flowbite-react";

export const AppFooter = () => {
  return (
    <Footer container className="fixed right-0 bottom-0 left-0">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <Footer.Brand
          href="#"
          src="/public/favicon.png"
          alt="Ta3mia"
          name="Flowbite"
        />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
    </Footer>
  );
};
