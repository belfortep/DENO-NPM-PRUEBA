import {Router} from 'npm:express'
import {getTasks, getTask, updateTask, createTask, deleteTask} from '../controllers/taskController.ts'
const router = Router()

router.get('/', getTasks)
router.get('/:id', getTask)
router.put('/:id', updateTask)
router.post('/', createTask)
router.delete('/:id', deleteTask)

export default router