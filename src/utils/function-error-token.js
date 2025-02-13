export const functionErrorToken = (variable, token) => {
    throw new Error(`${variable} is not available key in ${token}!`)
}