const dataForm = (req, res) => {
    const { body } = req

    console.table(body)

    res.sendStatus(200)
}

module.exports = { dataForm }