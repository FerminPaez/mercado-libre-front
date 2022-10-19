export const formatAmount = amountString => amountString.toString().split('.')

export const getCurrencySymbol = currency => currency === 'ARS' ? '$' : 'u$d'
