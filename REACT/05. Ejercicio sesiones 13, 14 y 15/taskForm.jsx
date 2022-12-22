import React, { useState} from 'react';
import PropTypes from "prop-types";
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TaskForm = ({add, length}) => {

    const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL)

    const defaultTask2 = new Task('Example2', 'Default description 2', false, LEVELS.URGENT)

    const defaultTask3 = new Task('Example3', 'Default description 3', false, LEVELS.BLOCKING)


    //Estado del componente
    const [tasks, settasks] = useState([defaultTask, defaultTask2, defaultTask3]);

    const initialValues = {
        name: '',
        description: '',
        isCompleted: false,
        level: LEVELS.NORMAL
    }


    const registerTask = Yup.object().shape(
        {
            name: Yup.string()
                .min(4, 'Name task too short')
                .required('Task name is required'),
            description: Yup.string()
                .min(6, 'Description is too short')
                .required(),
            level: Yup.string().oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT], 'You must select a level').required('Level is required')


        }
    )

    /**
     * Método que llamaremos cuando hagamos submit en el form
     */

    function addTask(task) {        
        const tempTask = [...tasks];
        tempTask.push(task)
        settasks(tempTask)
        add(task);
    }

    const normalStyle = {
        color: 'blue',
        fontWeigth: 'bold',
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeigth: 'bold',
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeigth: 'bold',
    }

    return (
        
        <Formik
            initialValues={initialValues}
            validationSchema={registerTask}

            onSubmit={ (values) => {
                    setTimeout(() =>{
                        addTask(values)
                    }, 1000);                   
                }}
        
                
            


        >

            {({
                errors,
                touched,
                isSubmitting,
                values,
                handleChange,
                handleBlur }) => (
                <Form>

                    <label htmlFor="name">Name Task</label>
                    <Field id="name" type='text' name="name" placeholder="Name Task" />

                    <label htmlFor="description">Description Task</label>
                    <Field id="description" type='text' name="description" placeholder="Description Task" />

                    <Field as="select" name="level">
                        <option value={LEVELS.BLOCKING} style={blockingStyle}>Blocking</option>
                        <option value={LEVELS.NORMAL} style={normalStyle}>Normal</option>
                        <option value={LEVELS.URGENT} style={urgentStyle}>Urgent</option>
                    </Field>

                    {/** name task errors */}

                    {
                        errors.name && touched.name &&
                        (
                            <ErrorMessage name='name' component={'div'}></ErrorMessage>
                        )
                    }

                    {/** description task errors */}

                    {
                        errors.description && touched.description &&
                        (
                            <ErrorMessage name='description' component={'div'}></ErrorMessage>
                        )
                    }

                    {/** level task errors */}

                    {
                        errors.level && touched.level &&
                        (
                            <ErrorMessage name='level' component={'div'}></ErrorMessage>
                        )
                    }

                    


                    <button type="submit">Register Task</button>
                    {isSubmitting ? (<p>Registering your task...</p>) : null}
                </Form>
            )}

        </Formik>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,

};

export default TaskForm;
