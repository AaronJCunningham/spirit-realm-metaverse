import Link from "next/link";
import MetaDataHeader from "../../components/metaheader/MetaDataHeader";

const Privacy = () => {
  return (
    <>
      <MetaDataHeader title={"privacy"} />
      <div className="page-container">
        <div className="margin">
          <h1>Privacy Policy</h1>
          <p>
            At XELEVEN Media Inc & Shiloh and the Spirit Realm, we are committed
            to protecting your privacy. This privacy policy explains how we
            collect, use, and share information about you when you use our
            website{" "}
            <Link href=" https://spiritrealm.art">
              Shiloh and the Spirit Realm
            </Link>
            .
          </p>
          <h5> Information We Collect</h5>
          <p>
            We collect information about you in the following ways: Information
            you give us: We may collect information about you when you fill out
            a form or enter information on our website. This may include your
            name, email address, phone number, and any other information you
            choose to provide. Information we collect automatically: When you
            use our website, we may collect certain information automatically,
            such as your IP address, browser type and version, and the pages you
            visit. We may also collect information about your device, such as
            its device ID and operating system. Information from third parties:
            We may receive information about you from third parties, such as
            social media platforms or advertising partners.
          </p>
          <h5> Use of Information</h5>
          <p>
            We use the information we collect about you to: Provide and improve
            our website and services Communicate with you, such as by sending
            you updates or promotional materials Analyze and understand how you
            use our website Personalize your experience on our website Protect
            the security and integrity of our website Sharing of Information We
            may share your information with third parties in the following
            cases: With your consent: We may share your information with third
            parties if you have given us your consent to do so. With service
            providers: We may share your information with service providers who
            help us operate and improve our website. These service providers are
            contractually obligated to protect your information and only use it
            for the purposes for which it was shared. For legal reasons: We may
            disclose your information if required to do so by law or if we
            believe it is necessary to protect the rights, property, or safety
            of [website name], our users, or the public. Cookies and Other
            Tracking Technologies We use cookies and other tracking technologies
            to improve the performance and functionality of our website, to
            understand how you use our website, and to personalize your
            experience. You can control how cookies are used by adjusting the
            settings on your browser. However, please note that if you disable
            cookies, some features of our website may not be available to you.
          </p>
          <h5> Changes to This Privacy Policy</h5>
          <p>
            We may update this privacy policy from time to time. We will post
            any changes on this page and encourage you to review our privacy
            policy regularly.
          </p>
          <h5> Contact Us</h5>
          <p>
            If you have any questions about this privacy policy or the
            information we collect about you, please contact us at
            aaron@xeleven.tech
          </p>
        </div>
      </div>
    </>
  );
};
export default Privacy;
