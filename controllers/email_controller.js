import SibApiV3Sdk from "sib-api-v3-sdk";

var defaultClient = SibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey =
  "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";

var apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail(); // SendSmtpEmail | Values to send a transactional email

export const sendWelcomeEmail = () => {
  sendSmtpEmail = {
    to: [
      {
        email: "jubayerjuhan.info@gmail.com",
        name: "My Instructor",
      },
    ],
    templateId: 2,
    params: {
      FIRSTNAME: "Juhan",
    },
    headers: {
      "X-Mailin-custom":
        "custom_header_1:custom_value_1|custom_header_2:custom_value_2",
    },
  };
  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log(data);
    },
    function (error) {
      console.error(error);
    }
  );
};
