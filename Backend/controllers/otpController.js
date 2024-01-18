const generateotp = async (req, res) => {
    const yourOtp = Math.floor(99999999 * Math.random()).toString()
    res.send(yourOtp)
}

module.exports = { generateotp }