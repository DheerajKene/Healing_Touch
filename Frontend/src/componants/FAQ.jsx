import React from 'react'
import './FAQ.css'
import { AccordionRoot, AccordionItem, AccordionItemTrigger, AccordionItemContent, AccordionItemIndicator } from "@chakra-ui/react"

const FAQ = () => {

    const items = [
  { value: "a", title: "What services does Healing Touch provide?", text: "We provide a range of healthcare services including attendant care, nursing, elderly care, physiotherapy, baby care, and medical equipment rental." },
  { value: "b", title: "How can I book an appointment?", text: "You can book an appointment by clicking the 'Book now' button in the navbar or filling out the request callback form on our homepage." },
  { value: "c", title: "Are your doctors certified?", text: "Yes, all our doctors and healthcare professionals are fully certified and experienced in their respective fields." },
  { value: "d", title: "How can we Recognize that the person who came to our place is from Care24?", text: "Before the visit, firstly the profile of the person coming to your place will be shared with you" },
  { value: "e", title: "Could I meet the caretaker before the appointment?", text: "You can certainly connect with the caretaker on call prior to he/she starting the service.." },
  { value: "f", title: "What will be the work profile of the caretaker?", text: "The work profile of the caretaker can vary depending upon the specific needs and requirements of the individual or patient he/she is caring for." }
]
  return (
    
    <>
        <div className='faq-section'>
            <h2>Frequently Asked Questions</h2>
            <AccordionRoot collapsible defaultValue={["b"]}>
                {items.map((item, index) => (
                <AccordionItem key={index} value={item.value}>
                    <AccordionItemTrigger>
                        {item.title}
                        <AccordionItemIndicator />
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                        {item.text}
                    </AccordionItemContent>
                </AccordionItem>
                ))}
            </AccordionRoot>
        </div>
    </>
  )
}

export default FAQ