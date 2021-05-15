import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import ContactFormStyles from './ContactForm.styles';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <ContactFormStyles onSubmit={handleSubmit(onSubmit)}>
            <div className='columns is-desktop'>
                <div className='column'>
                    <div class='field'>
                        <label class='label' htmlFor='name'>
                            Nome*
                        </label>
                        <div class='control'>
                            <input
                                className={`input ${errors.name && 'is-danger'}`}
                                name='name'
                                id='name'
                                type='text'
                                {...register('name', { required: true })}
                            />
                        </div>
                        {errors.name && <p class='help is-danger'>Obrigatório</p>}
                    </div>
                </div>
                <div className='column'>
                    <div class='field'>
                        <label class='label' htmlFor='phone'>
                            Telefone*
                        </label>
                        <div class='control'>
                            <input
                                className={`input ${errors.phone && 'is-danger'}`}
                                name='phone'
                                id='phone'
                                type='tel'
                                {...register('phone', { required: true })}
                            />
                        </div>
                        {errors.phone && <p class='help is-danger'>Obrigatório</p>}
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    <div class='field'>
                        <label class='label' htmlFor='email'>
                            E-mail*
                        </label>
                        <div class='control'>
                            <input
                                className={`input ${errors.email && 'is-danger'}`}
                                name='email'
                                id='email'
                                type='email'
                                {...register('email', { required: true })}
                            />
                        </div>
                        {errors.email && <p class='help is-danger'>Obrigatório</p>}
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    <div className='field'>
                        <label className='label' htmlFor='subject'>
                            Mensagem
                        </label>
                        <div className='control'>
                            <textarea id='subject' className='textarea' placeholder='Digite seu texto aqui' {...register('subject')}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class='buttons'>
                <Button className='button is-loading' color='text'>
                    Enviar
                </Button>
            </div>
        </ContactFormStyles>
    );
}
