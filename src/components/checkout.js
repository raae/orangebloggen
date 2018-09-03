import React from "react";

// hardcoded amount (in US cents) to charge users
// you could set this variable dynamically to charge different amounts
const amount = 1234;
const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "3rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "400px",
};
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
};

// Below is where the checkout component is defined.
// It has several functions, and some default state variables.
const Checkout = class extends React.Component {
  state = {
    disabled: false,
    buttonText: "Test Payment Now",
    paymentMessage: "",
  };

  resetButton() {
    this.setState({ disabled: false, buttonText: "Test Payment Now" });
  }

  componentDidMount() {
    this.stripeHandler = StripeCheckout.configure({
      // You’ll need to add your own Stripe public key to the `checkout.js` file.
      // key: 'pk_test_STRIPE_PUBLISHABLE_KEY',
      key: "pk_test_gILsad3S49ArZfiigy6RXlHu",
      closed: () => {
        this.resetButton();
      },
    });
  }

  openStripeCheckout(event) {
    event.preventDefault();
    this.setState({ disabled: true, buttonText: "WAITING..." });
    this.stripeHandler.open({
      name: "Demo Product",
      amount: amount,
      description: "Help Ola Test Payment",
      token: token => {
        fetch(`https://k53uobt9mf.execute-api.us-east-1.amazonaws.com/dev/checkout`, {
          method: "POST",
          body: JSON.stringify({
            token,
            amount,
          }),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then(res => {
            console.log("Transaction processed successfully");
            this.resetButton();
            this.setState({ paymentMessage: "Payment Test Successful!" });
            return res.json();
          })
          .catch(error => {
            console.error("Error:", error);
            this.setState({ paymentMessage: "Payment Test Failed" });
          });
      },
    });
  }

  render() {
    return (
      <div style={cardStyles}>
        <h4>Test Online Payment For Free!</h4>
        <p>
          Use any email, 4242 4242 4242 4242 as the credit card number, any 3
          digit number, and any future date of expiration.
        </p>
        <button
          style={buttonStyles}
          onClick={event => this.openStripeCheckout(event)}
          disabled={this.state.disabled}
        >
          {this.state.buttonText}
        </button>
        {this.state.paymentMessage}
      </div>
    );
  }
};

export default Checkout;
