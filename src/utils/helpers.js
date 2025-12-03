// Utility helper functions
import { REGEX_PATTERNS } from './constants.js'

/**
 * Validates email address format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
export const validateEmail = (email) => {
    return REGEX_PATTERNS.email.test(email)
}

/**
 * Validates phone number format
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
export const validatePhone = (phone) => {
    return REGEX_PATTERNS.phone.test(phone)
}

/**
 * Validates URL format
 * @param {string} url - URL to validate
 * @returns {boolean} - True if valid
 */
export const validateUrl = (url) => {
    return REGEX_PATTERNS.url.test(url)
}

/**
 * Truncates text to specified length with ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text
    return `${text.substring(0, maxLength)}...`
}

/**
 * Formats currency value
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} - Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(amount)
}

/**
 * Debounces function execution
 * @param {function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {function} - Debounced function
 */
export const debounce = (func, delay = 300) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), delay)
    }
}

/**
 * Throttles function execution
 * @param {function} func - Function to throttle
 * @param {number} limit - Limit in milliseconds
 * @returns {function} - Throttled function
 */
export const throttle = (func, limit = 300) => {
    let inThrottle
    return (...args) => {
        if (!inThrottle) {
            func.apply(this, args)
            inThrottle = true
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

/**
 * Capitalizes first letter of string
 * @param {string} str - String to capitalize
 * @returns {string} - Capitalized string
 */
export const capitalize = (str) => {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Converts string to title case
 * @param {string} str - String to convert
 * @returns {string} - Title case string
 */
export const toTitleCase = (str) => {
    if (!str) return ''
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

/**
 * Slugifies string for URLs
 * @param {string} str - String to slugify
 * @returns {string} - Slugified string
 */
export const slugify = (str) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

/**
 * Checks if object is empty
 * @param {object} obj - Object to check
 * @returns {boolean} - True if empty
 */
export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0
}

/**
 * Deep clones an object
 * @param {any} obj - Object to clone
 * @returns {any} - Cloned object
 */
export const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj
    if (Array.isArray(obj)) return obj.map((item) => deepClone(item))

    const cloned = {}
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            cloned[key] = deepClone(obj[key])
        }
    }
    return cloned
}

/**
 * Merges multiple objects into one
 * @param {...object} objects - Objects to merge
 * @returns {object} - Merged object
 */
export const mergeObjects = (...objects) => {
    return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {})
}

/**
 * Gets value from object using dot notation
 * @param {object} obj - Object to search
 * @param {string} path - Path using dot notation (e.g., 'user.profile.name')
 * @returns {any} - Value or undefined
 */
export const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc?.[part], obj)
}

/**
 * Delays execution for specified time
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after delay
 */
export const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Generates random ID
 * @param {number} length - Length of ID
 * @returns {string} - Random ID
 */
export const generateId = (length = 8) => {
    return Math.random().toString(36).substring(2, 2 + length)
}

/**
 * Checks if element is in viewport
 * @param {Element} element - DOM element
 * @returns {boolean} - True if in viewport
 */
export const isInViewport = (element) => {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

/**
 * Scrolls to element smoothly
 * @param {Element} element - Element to scroll to
 * @param {number} offset - Offset from top
 */
export const smoothScroll = (element, offset = 0) => {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
    })
}

/**
 * Copies text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} - True if successful
 */
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch {
        return false
    }
}
