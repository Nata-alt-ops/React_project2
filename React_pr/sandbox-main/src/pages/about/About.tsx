import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { data, useNavigate } from 'react-router-dom';
import './About.scss';



export const About = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   const [cityFilter, setCityFilter] = useState('all');

 

      return (
        <div className='about_con1'>
            <div className='about_info_button'>
                <div className='about_info'>

                </div>
                <div className='about_button'>
                    
                </div>
            </div>
        </div>
      )}