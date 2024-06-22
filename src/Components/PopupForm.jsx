
/*
 **********************Login Api**********

**********result
{
    "success": true,
    "userId": "u-35e1acc4-9f4f-4f79-adc1-e2e84f32d3e9",
    "newUser": false,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTM1ZTFhY2M0LTlmNGYtNGY3OS1hZGMxLWUyZTg0ZjMyZDNlOSIsImlhdCI6MTcxOTA3NDc5NywiZXhwIjoxNzE5Njc5NTk3fQ.wCRAy2rwyYp0091K1ULTNrQpPyouM_jNxuK-bKBaU-Y",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTM1ZTFhY2M0LTlmNGYtNGY3OS1hZGMxLWUyZTg0ZjMyZDNlOSIsImlhdCI6MTcxOTA3NDc5N30.SioL2Qspb42h-1ONvSTGD-A2BJQ_oRrzqrSwDYTk5so"
}
    ******************Get api**************
   curl --request GET \
     --url 'https://staging.questprotocol.xyz/api/v2/entities/e-b66bca24-f6ce-4489-b2e9-e24a90e04877/campaigns/c-14d4f959-5999-4308-af48-37549b89eec7?variation=developer&platform=REACT' \
     --header 'accept: application/json' \
     --header 'apikey: k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe' \
     --header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTM1ZTFhY2M0LTlmNGYtNGY3OS1hZGMxLWUyZTg0ZjMyZDNlOSIsImlhdCI6MTcxOTA3NDc5NywiZXhwIjoxNzE5Njc5NTk3fQ.wCRAy2rwyYp0091K1ULTNrQpPyouM_jNxuK-bKBaU-Y' \
     --header 'userid: u-35e1acc4-9f4f-4f79-adc1-e2e84f32d3e9'

    ***************** Verify api submit form********* 

     curl --request POST \
     --url https://staging.questprotocol.xyz/api/v2/entities/e-b66bca24-f6ce-4489-b2e9-e24a90e04877/campaigns/c-14d4f959-5999-4308-af48-37549b89eec7/verify \
     --header 'accept: application/json' \
     --header 'apikey: k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe' \
     --header 'content-type: application/json' \
     --header 'token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTM1ZTFhY2M0LTlmNGYtNGY3OS1hZGMxLWUyZTg0ZjMyZDNlOSIsImlhdCI6MTcxOTA3NDc5NywiZXhwIjoxNzE5Njc5NTk3fQ.wCRAy2rwyYp0091K1ULTNrQpPyouM_jNxuK-bKBaU-Y' \
     --header 'userid: u-35e1acc4-9f4f-4f79-adc1-e2e84f32d3e9' \
     --data '
{
  "campaignVariationId": "cv-d9d30363-2ce8-4793-a7b3-ab34eccdbd71",
  "actions": [
    {
      "actionId": "ca-336fef44-9d0f-42dc-8493-15a91ea36013"
    }
  ]
}
'
*********result 
{
  "success": true,
  "data": [
    {
      "success": true,
      "message": "Action already verified",
      "actionId": "ca-336fef44-9d0f-42dc-8493-15a91ea36013"
    }
  ]
}
*/

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const API_KEY = 'k-8f7aa4ea-a0c7-42ac-a821-a342d21887fe'
const ENTITY_AUTHENTICATION_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTM1ZTFhY2M0LTlmNGYtNGY3OS1hZGMxLWUyZTg0ZjMyZDNlOSIsImlhdCI6MTcxOTA2MDU2NSwiZXhwIjoxNzE5NjY1MzY1fQ.UwO7D4znaSmVicVaRKHzK7erUg2QGzhsg4pmjMnk6lc'
const USER_ID ='u-35e1acc4-9f4f-4f79-adc1-e2e84f32d3e9'
const ENTITY_ID = 'e-b66bca24-f6ce-4489-b2e9-e24a90e04877'
const CAMPAIGN_ID = 'c-14d4f959-5999-4308-af48-37549b89eec7'
const CAMPAIGN_VARIATION_ID = "cv-d9d30363-2ce8-4793-a7b3-ab34eccdbd71";

const PopupForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({});
  const [formFields, setFormFields] = useState([]);
  const [stage, setStage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);


useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(`https://staging.questprotocol.xyz/api/v2/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}`, {
          headers : {
            'apikey': API_KEY,
            'token': ENTITY_AUTHENTICATION_TOKEN,
            'userid': USER_ID
          },
          params : {
            variation: 'developer',
            platform: 'REACT',
          },
        });
        setFormFields(response.data.data.actions); 
      } catch (error) {
        console.error('Error fetching form data:', error.message, error.response.data);  // Add error.response.data to get more details
      }
    };
  
    fetchFormData();
    setIsOpen(true); 
  }, []);
  

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (stage === 1) {
      setStage(2);
    } else {
      try {
        await axios.post(`https://staging.questprotocol.xyz/api/v2/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}/verify`, formData, {
            headers : {
                'apikey': API_KEY,
                'token': ENTITY_AUTHENTICATION_TOKEN,
                'userid': USER_ID
              },
        });
        alert('Form submitted successfully!');
        closeForm();
      } catch (error) {
        console.error('Error submitting form:', error.message, error);
      }
    }
  };



// const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (stage === 1) {
//       setStage(2);
//     } else {
//       try {
//         const requestBody = {
//           campaignVariationId: CAMPAIGN_VARIATION_ID,
//           actions: formFields.map(field => ({
//             actionId: field._id,
//             value: formData[field.title] || ""
//           }))
//         };
        
//         console.log("Submitting form with data:", requestBody);  // Add this line to log form data
//         const response = await axios.post(`https://staging.questprotocol.xyz/api/v2/entities/${ENTITY_ID}/campaigns/${CAMPAIGN_ID}/verify`, requestBody, {
//           headers : {
//             'apikey': API_KEY,
//             'token': ENTITY_AUTHENTICATION_TOKEN,
//             'userid': USER_ID
//           },
//         });
//         console.log("Response from server:", response.data);  // Add this line to log the server response
//         alert('Form submitted successfully!');
//         closeForm();
//       } catch (error) {
//         console.error('Error submitting form:', error.message, error.response?.data);  // Add error.response.data to get more details
//       }
//     }
//   };



// const renderField = (field) => {
//     switch (field.actionType) {
//       case 'USER_INPUT_TEXT':
//         return (
//           <FieldContainer key={field._id}>
//             <label>{field.title}:</label>
//             <input
//               type="text"
//               name={field.title}
//               value={formData[field.title] || ''}
//               onChange={handleInputChange}
//               required={field.isRequired}
//             />
//           </FieldContainer>
//         );
//       case 'USER_INPUT_EMAIL':
//         return (
//           <FieldContainer key={field._id}>
//             <label>{field.title}:</label>
//             <input
//               type="email"
//               name={field.title}
//               value={formData[field.title] || ''}
//               onChange={handleInputChange}
//               required={field.isRequired}
//             />
//           </FieldContainer>
//         );
//       case 'USER_INPUT_NUMBER':
//         return (
//           <FieldContainer key={field._id}>
//             <label>{field.title}:</label>
//             <input
//               type="number"
//               name={field.title}
//               value={formData[field.title] || ''}
//               onChange={handleInputChange}
//               required={field.isRequired}
//             />
//           </FieldContainer>
//         );
//       case 'USER_INPUT_SINGLE_CHOICE':
//         return (
//           <FieldContainer key={field._id}>
//             <label>{field.title}:</label>
//             <select
//               name={field.title}
//               value={formData[field.title] || ''}
//               onChange={handleInputChange}
//               required={field.isRequired}
//             >
//               {field.options.map((option, index) => (
//                 <option key={index} value={option}>{option}</option>
//               ))}
//             </select>
//           </FieldContainer>
//         );
//       default:
//         return null;
//     }
//   };
  

const renderField = (field) => {
    switch (field.actionType) {
      case 'USER_INPUT_TEXT':
        return (
          <FieldContainer key={field._id}>
            <label>{field.title}:</label>
            <input
              type="text"
              name={field.title}
              value={formData[field.title] || ''}
              onChange={handleInputChange}
              required={field.isRequired}
            />
          </FieldContainer>
        );
      case 'USER_INPUT_EMAIL':
        return (
          <FieldContainer key={field._id}>
            <label>{field.title}:</label>
            <input
              type="email"
              name={field.title}
              value={formData[field.title] || ''}
              onChange={handleInputChange}
              required={field.isRequired}
            />
          </FieldContainer>
        );
      case 'USER_INPUT_NUMBER':
        return (
          <FieldContainer key={field._id}>
            <label>{field.title}:</label>
            <input
              type="number"
              name={field.title}
              value={formData[field.title] || ''}
              onChange={handleInputChange}
              required={field.isRequired}
            />
          </FieldContainer>
        );
      case 'USER_INPUT_SINGLE_CHOICE':
        return (
          <FieldContainer key={field._id}>
            <label>{field.title}:</label>
            <select
              name={field.title}
              value={formData[field.title] || ''}
              onChange={handleInputChange}
              required={field.isRequired}
            >
              {field.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </FieldContainer>
        );
      default:
        return null;
    }
  };
  

  return (
    <FormContainer isOpen={isOpen}>
      <CloseButton onClick={closeForm}>×</CloseButton>
      <FormHeader>
        <h3>Connect with Sales</h3>
        <StageContainer>
            <div>
            <Stage active={stage === 1}>1</Stage>
            <p>YOUR DETAILS</p>
            </div>
            <div>
            <Stage active={stage === 2}>2</Stage>
            <p>YOUR BUSINESS</p>
            </div>
        </StageContainer>
      </FormHeader>
      <FORM>
      <form onSubmit={handleSubmit}>
        {stage === 1 ? (
          <>
            <StageContent>
              {formFields.map(field => renderField(field))}
            </StageContent>
            <button type="submit">Next</button>
          </>
        ) : (
          <>
            <StageContent>
              {/* Add additional form fields for stage 2 */}
            </StageContent>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
      </FORM>
    </FormContainer>
  );
};

export default PopupForm;

const FORM = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        
    }
    
`

const FormContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  background-color: #F9FAFB;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 1000;
  transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const FormHeader = styled.div`
  margin-bottom: 20px;
`;

const StageContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
  
`;

const Stage = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ active }) => active ? '#9168EC' : 'white'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  color: ${({ active }) => active ? 'white' : 'black'};
  font-weight: bold;
  font-size: 16px;
`;

const StageContent = styled.div`
  margin-bottom: 20px;
`;

const FieldContainer = styled.div`
  margin-bottom: 5px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input, select {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border: 0.1px solid lightgray ;
    border-radius: 5px;
  }
`;
