const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "8e29dd3b5579e325f13546f12e7969ff-us14",
  server: "us14",
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();