// Test runner — imports and exercises all utility functions from Utility/

import { isValidEmail, isValidPassword, isValidPhone, isValidUrl } from './Utility/validators.js';
import { formatCurrency, formatDate, formatRelativeTime, truncateString } from './Utility/formatters.js';

// --- Validator tests: valid vs invalid inputs for each function ---
console.log("================Validators====================")
console.log(isValidEmail('test@gmail.com'))
console.log(isValidEmail('invalidemail'))
console.log(isValidPassword('Password@123'))
console.log(isValidPassword('password'))
console.log(isValidPhone('1234567890'))
console.log(isValidUrl('https://www.google.com'))

// --- Formatter tests: currency, date, relative time, and truncation ---
console.log("================formatters====================")
console.log(formatCurrency(1000))
console.log(formatDate('2026-11-01'))
console.log(formatRelativeTime('2026-01-01'))
console.log(truncateString('test@gmail.com', 5))
