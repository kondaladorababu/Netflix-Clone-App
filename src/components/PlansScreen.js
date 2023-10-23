import React, { useState } from 'react';
import '../styles/PlansScreen.css'

let dummyPlans = [
    {
        name: "Basic Plan",
        price: "Price: ₹149",
        status: 'unsubscribe',

    },
    {
        name: "Standard Plan",
        price: "Price: ₹299",
        status: 'subscribe',

    },
    {
        name: "Premium Plan",
        price: "Price: ₹499",
        status: 'subscribe',

    }
];

function PlansScreen() {
    const [plans, setPlans] = useState(dummyPlans);

    const handleSubscribe = (planName, currStatus) => {
        ///user is subscribing i.e chang status from sub to unsub
        if (currStatus === 'subscribe') {
            const updatedPlans = plans.map((plan) => {
                if (plan.name === planName) {
                    if (currStatus === "subscribe") {
                        plan.status = "unsubscribe";
                    } else {
                        plan.status = "subscribe";
                    }
                } else {
                    //so rem unsub should change to sub
                    if (currStatus === "subscribe") {
                        plan.status = "subscribe";
                    } else {
                        plan.status = "unsubscribe";
                    }
                }
                return plan;
            });
            setPlans(updatedPlans);
        }else{
            return;
        }
    }

    return (
        <div className='plansScreen'>
            <div className='plans'>
                {plans.map((plan) => (
                    <div className='plan' key={plan.name}>
                        <h4>{plan.name}</h4>
                        <p>{plan.price}</p>
                        <button
                            className={`subscribe_button ${plan.status === 'unsubscribe' ? 'grey_button' : ''}`}
                            onClick={() => { handleSubscribe(plan.name, plan.status) }}>
                            {plan.status}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlansScreen;
