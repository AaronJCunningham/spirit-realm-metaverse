import Link from "next/link";
import MetaDataHeader from "../../components/metaheader/MetaDataHeader";

const Terms = () => {
  return (
    <>
      <MetaDataHeader title={"Terms"} />
      <div className="page-container">
        <div className="margin">
          <h1>Terms of Service </h1>
          <p>
            Welcome to Shiloh and the
            <Link href=" https://spiritrealm.art">
              Shiloh and the Spirit Realm.
            </Link>
            By accessing or using the Website, you agree to be bound by these
            Terms of Service and our Privacy Policy, which is incorporated by
            reference. If you do not agree to these terms, please do not use the
            Website. The Website is owned and operated by XELEVEN Media Inc
            ("us", "we", or "our").
          </p>
          <p>
            These Terms of Service apply to all users of the Website, including
            users who are also contributors of content, information, and other
            materials or services on the Website. Content All content on the
            Website, including text, graphics, images, and information, is the
            property of XELEVEN Media Inc or its licensors and is protected by
            copyright and other intellectual property laws. You may use the
            content on the Website for your personal, non-commercial use only.
            You must not reproduce, distribute, modify, create derivative works
            of, publicly display, publicly perform, republish, download, store,
            or transmit any of the content on the Website without our prior
            written permission. Accounts and Registration In order to access
            some features of the Website, you may be required to create an
            account. You are responsible for maintaining the confidentiality of
            your account and password and for restricting access to your
            account. You agree to accept responsibility for all activities that
            occur under your account or password. You may not use the Website
            for any illegal or unauthorized purpose. You must not, in the use of
            the Website, violate any laws in your jurisdiction (including but
            not limited to copyright laws).
          </p>

          <p>
            Links to Other Websites The Website may contain links to third-party
            websites or resources. We have no control over the content, privacy
            policies, or practices of these websites and resources and we are
            not responsible for the availability or accuracy of their content.
            We do not endorse and are not responsible or liable for any content,
            advertising, products, or other materials on or available from these
            websites or resources. Termination We reserve the right to terminate
            your access to the Website at any time and without notice for any
            reason, including without limitation if we believe you have violated
            these Terms of Service.
          </p>
          <p>
            Disclaimers The Website is provided on an "as is" and "as available"
            basis. We make no representations or warranties of any kind, express
            or implied, as to the operation of the Website or the information,
            content, materials, or products included on the Website. We will not
            be liable for any damages of any kind arising from the use of the
            Website, including but not limited to direct, indirect, incidental,
            punitive, and consequential damages. Indemnification You agree to
            indemnify and hold us and our affiliates, officers, agents, and
            employees harmless from any claim or demand, including reasonable
            attorneys' fees, made by any third party due to or arising out of
            your use of the Website, your violation of these Terms of Service,
            or your violation of any rights of another.
          </p>
          <h5>Governing Law </h5>
          <p>
            These Terms of Service and your use of the Website will be governed
            by and construed in accordance with the laws of the Canada without
            giving effect to any principles of conflicts of law. Changes to
            These Terms of Service We reserve the right to modify these Terms of
            Service at any time. We will post any changes on this page and
            encourage you to review the Terms of Service regularly. Your
            continued use of the Website after any changes to these Terms of
            Service will be deemed acceptance of those changes. Contact Us If
            you have any questions about these Terms of Service or the Website,
            please contact us at aaron@xeleven.tech.
          </p>
        </div>
      </div>
    </>
  );
};
export default Terms;
