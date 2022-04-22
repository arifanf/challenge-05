import React from 'react'
import './Panel.css'
import { useForm } from 'react-hook-form'

const Panel = (props) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = () => {
        fetch('https://625d73e74c36c753577540cb.mockapi.io/fejs2/api/c5-cars')
        .then( response => {
            return response.json()
        })
        .then( data => {
            props.setCarList([...data])
        })
    }

  return (
      <>
        <div className="search-bar-container">
            <form id="search-car" className="search-bar" onSubmit={handleSubmit(onSubmit)}>
{/* 
                <div className="search-bar-title">
                    {props.cari ? '' : 'Pencarianmu'}
                </div> */}

                <div className='search-bar-operations'>
                    <div className="search-bar-operations-container">
                        <label className="form-label">Tipe Driver</label>
                        <select id="tipe" className="form-control shadow-none" disabled={props.form} {...register('tipe')}>
                            <option value="" disabled selected hidden>Pilih Tipe Driver</option>
                            <option value="with_driver">Dengan Supir</option>
                            <option value="no_driver">Tanpa Supir (Lepas Kunci)</option>
                        </select>
                    </div>
                    
                    <div className="search-bar-operations-container">
                        <label className="form-label">Tanggal</label>
                        <input id="date" type="date" placeholder="Pilih Tanggal" className="form-control shadow-none" disabled={props.form} {...register('date')}/>
                    </div>

                    <div className="search-bar-operations-container">
                        <label className="form-label">Waktu Jemput/Ambil</label>
                        <input id="time" type="time" placeholder="Pilih Waktu" className="form-control shadow-none"  disabled={props.form} {...register('time')}/>
                    </div>

                    <div className="search-bar-operations-container">
                        <label className="form-label">Jumlah Penumpang</label>
                        <input id="pass" type="number" placeholder="Jumlah Penumpang" className="form-control shadow-none" disabled={props.form} {...register('pass')}/>
                    </div>
                    
                    <button className='btn button-cari-container shadow-none'>
                        <div type="submit" className='button-cari'>
                            Cari Mobil
                        </div>
                    </button>
                </div>
            </form>

            <div className="spacer"></div>
        </div>
    </>
  )
}

export default Panel