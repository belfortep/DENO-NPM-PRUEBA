import mongoose from 'npm:mongoose'

try{

        await mongoose.connect(MONGOURI)
        console.log('db connected')
} catch(err) {
        console.error(err)
}