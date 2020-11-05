export const increment = (amount) => ({
    type: 'INCREASE',
    payload: amount || 1
});