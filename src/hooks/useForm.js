import { useState } from 'react'
import { validateEmail } from '../utils/helpers.js'

/**
 * Custom hook for form handling with validation
 * @param {object} initialValues - Initial form values
 * @param {function} onSubmit - Submit callback function
 * @returns {object} - Form state and handlers
 */
export const useForm = (initialValues = {}, onSubmit) => {
    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validateForm = () => {
        const newErrors = {}

        // Email validation if field exists
        if (values.email && !validateEmail(values.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        // Required fields validation
        Object.keys(values).forEach((key) => {
            if (typeof values[key] === 'string' && values[key].trim() === '') {
                newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`
            }
        })

        return newErrors
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleBlur = (e) => {
        const { name } = e.target
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formErrors = validateForm()

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }

        setErrors({})
        setIsSubmitting(true)

        try {
            await onSubmit(values)
        } catch (error) {
            console.error('Form submission error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetForm = () => {
        setValues(initialValues)
        setErrors({})
        setTouched({})
    }

    const setFieldValue = (name, value) => {
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const setFieldError = (name, error) => {
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }))
    }

    return {
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm,
        setFieldValue,
        setFieldError,
    }
}
