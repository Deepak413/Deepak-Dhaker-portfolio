import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  cursor:pointer;
  background: hsla(271, 100%, 50%, 1);
  ${'' /* background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%); */}
  ${'' /* background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%); */}
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  &:hover {
        transition: all 0.4s ease-in-out;
        background: -webkit-linear-gradient(225deg, hsla(294, 100%, 50%, 1) 0%, hsla(271, 100%, 50%, 1) 100%);
    }
`;


const ContactDetails = styled.div`
  color: white;
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  margin-top: 28px;
  gap: 38px;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    padding: 0 10px;
    margin-top: 0px;
    gap: 0;
    justify-content: space-evenly;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
    

`

const ContactDetailsCard = styled.div`
  display:flex;
  flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: #1b1b2d;
    padding: 18px 0;
    border-radius: 15px;
    @media (max-width: 768px) {
      width: 45%;
    }
    @media (max-width: 480px) {
      width: 100%;
    }
`

export const NavLink = styled.a`
    color: #43a8bc;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ContactDetailsFormContainer = styled.div`
  width: 95%;
  max-width: 800px;
  display: flex;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  margin-top: 28px;
  gap: 12px;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 0px;
  }
  @media (max-width: 480px) {
    padding: 15px;
  }
`


const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("form submit successfully");
    form.current.reset();
    emailjs.sendForm('service_kphcvfg', 'template_g4f17zs', form.current, 'uf4jvxhrSCjVC529P')
      .then((result) => {
        setOpen(true);
        console.log("mail sent successfully");
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        console.log("mail sending failed");
      });
  }

  const emailAddress = 'deepakdhaker343@gmail.com';
  const handleEmailClick = () => {
    const subject = 'Subject of the email';
    const body = 'Body of the email';
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const phoneNumber = '9982432413';
  const handleWhatsappClick = () => {
    const message = 'Hello there!';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactDetailsFormContainer>
          <ContactDetails>
            <ContactDetailsCard>
              <MdEmail  style={{fontSize:"2rem", marginBottom:"8px"}}/>
              <div>Email</div>
              <div style={{color:"#9f9f9f"}}>ddhaker2000@gmail.com</div>
              <NavLink onClick={handleEmailClick} target='new'>Send an email</NavLink>
            </ContactDetailsCard>
            <ContactDetailsCard>
              <FaWhatsapp style={{fontSize:"2rem", marginBottom:"8px"}}/>
              <div>WhatsApp</div>
              <div style={{color:"#9f9f9f"}}>+91 9982432413</div>
              <NavLink onClick={handleWhatsappClick} target='new'>Send a message</NavLink>
            </ContactDetailsCard>
          </ContactDetails>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="user_email" />
            <ContactInput placeholder="Your Name" name="user_name" />
            <ContactInput placeholder="Subject" name="subject" />
            <ContactInputMessage placeholder="Message" rows="4" name="message" />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </ContactDetailsFormContainer>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact