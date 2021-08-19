import React from 'react'
import {Grid } from '@material-ui/core'
import MyFooter from '../components/myFooter'
import Header from '../components/Header'
import HeaderLinks from '../components/HeaderLinks'

const Policy = () => {
    return (
        <div>
            <Header
          
          fixed
          color="transparent"
          //routes={dashboardRoutes}
          // changeColorOnScroll={{
          //   color:'transparent',
          //   height:50,
          // }}
          
          // rightLinks={(
          //       <div>
          //         <div>
          //         name
          //       </div>
          //         <div>
          //         name
          //       </div>
          //       </div>
          // )}
          
        //rightLinks={<HeaderLinks faqs={faqsScroll} start={startScroll} contact={contactScroll} testimonial={testimonialScroll} package={packageScroll} service={serviceScroll} about={aboutScroll} />}   
/>

            <Grid container justify='center'>
                <h2 style={{textAlign:'center'}}>
                    Privacy Policy
                </h2>
                <p>
                Please read the following terms regarding our privacy policy. An important part of the relationship we have with our Clients is the information you share with us. We want you to know how we treat your private information. hoardtradeinvestment.com protects our clients' privacy and does its best to provide their safety and convenience online. The hoardtradeinvestment.com website is subject to this "Privacy Policy". It regulates data accumulation
                 and usage at the website. Using the hoardtradeinvestment.com website infers your consent to the data practices given in this statement.
                </p>

                <Grid container justify='center'>
                    <h3 style={{textAlign:'center'}}>
                    Your Personal ;Information Accumulation
                    </h3>
                    <p>
                    hoardtradeinvestment.com accumulates such personal data as your name, ewallet information, secret question, secret answer and e-mail address. Some details about your software and hardware which are collected automatically by our platform's website. We receive such information as the type of your browser, your IP address, access times, domain names to maintain high level of our services and to manage the statistics of the hoardtradeinvestment.com website. Please consider the fact that if you reveal your personal data directly through the public message boards of the hoardtradeinvestment.com we are irresponsible for data privacy and such data can be used by third parties. We assure you that we do not read or interfere into your online private communication. hoardtradeinvestment.com "Privacy Policy" does not apply to other websites which you can decide to visit using a link from our website. That's why read attentively their privacy statements before giving them the right to collect your personal information. Please be aware
                     that hoardtradeinvestment.com does not bear responsibility for the content and rules of other websites.
                    </p>
                </Grid>

                <Grid container justify='center'>
                    <h3 style={{textAlign:'center'}}>
                    Use of Cookies

                    </h3>
                    <p>
                    So-called "cookies" are used at the hoardtradeinvestment.com website to help you in personalizing your
                     online presence. A cookie means a text file which a web-page server places on your hard disk. Cookies pose no threat to your computer:
                      no memory leak, virus infection or other undesirable results can be expected. Only web-server in the domain, which issued it to you, can read it, because cookies are uniquely assigned. One of the main purposes of cookies is saving your time, which is very convenient for you. Cookie is intended to signal the web-server that the user has returned to a particular page. For instance if you registered and personalized on the hoardtradeinvestment.com website to use its services, the cookie is necessary for the website to recall some particular information at your following visit. The process of your personal data recording becomes simpler and easier. Such data may include billing addresses, shipping addresses, etc. When you come back to the hoardtradeinvestment.com website again, the data you conveyed before can be restored. In this case you get quick access to the necessary hoardtradeinvestment.com features. You can accept and decline cookies as you like. Most web browsers allow cookies by default, but usually you have an ability to set your browser to reject cookies if you want to. But if you make up your mind to reject cookies, you may fail to use all the interactive features of our website to 
                     full as well as the features of other websites.
                    </p>
                </Grid>

                <Grid container justify='center'>
                    <h3 style={{textAlign:'center'}}>
                    Changes to this statement
                    </h3>
                    <p>
                    hoardtradeinvestment.com reserves the right to amend occasionally this "Privacy Policy" to correspond actual company's and customers' interaction. hoardtradeinvestment.com strongly recommends you to review this Statement from time to time not to miss the updates. In this case you'll be always 
                    aware of hoardtradeinvestment.com safety methods towards your personal data.
                    </p>
                </Grid>

            </Grid>
            <MyFooter />
        </div>
    )
}

export default Policy
