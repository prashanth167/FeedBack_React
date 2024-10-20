import React, { Children } from 'react'
import { createContext, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id : 1,
            text : 'This is Feedback item 1',
            rating : 10
        },
        {
            id : 2,
            text : 'This is Feedback item 2',
            rating : 9
        },
        {
            id : 3,
            text : 'This is Feedback item 3',
            rating : 7
        }
    ])

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => id !== item.id))
        }
    }

    return <FeedbackContext.Provider value ={{
        feedback,
        addFeedback,
        deleteFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext