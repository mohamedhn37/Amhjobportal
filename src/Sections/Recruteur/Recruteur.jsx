import React from 'react'
import RecruteurCard from '../../Components/RecruteurCard/RecruteurCard'
import SeactionHead from '../SectionHead/SeactionHead'




const Recruteur = () => {


    return (
        <>
            <div className="Recrutement">
                <div className="container my-5">
                    <SeactionHead title="Nos meilleurs recruteurs" description="Pour choisir votre rêve d’emploi tendance et pour rendre l’avenir brillant"/>
                    <div className="row g-5">
                        <RecruteurCard CompanyName="Elite Hangstroman" Companymap="Dhaka, Bangladesh" CompanyDescription="A software company is a business that develops and sells computer software. Some software companies specialize in a particular....." />
                        <RecruteurCard CompanyName="Elite Hangstroman" Companymap="Dhaka, Bangladesh" CompanyDescription="A software company is a business that develops and sells computer software. Some software companies specialize in a particular....." />
                        <RecruteurCard CompanyName="Elite Hangstroman" Companymap="Dhaka, Bangladesh" CompanyDescription="A software company is a business that develops and sells computer software. Some software companies specialize in a particular....." />
                        <RecruteurCard CompanyName="Elite Hangstroman" Companymap="Dhaka, Bangladesh" CompanyDescription="A software company is a business that develops and sells computer software. Some software companies specialize in a particular....." />
                        <RecruteurCard CompanyName="Elite Hangstroman" Companymap="Dhaka, Bangladesh" CompanyDescription="A software company is a business that develops and sells computer software. Some software companies specialize in a particular....." />
                        <RecruteurCard CompanyName="Elite Hangstroman" Companymap="Dhaka, Bangladesh" CompanyDescription="A software company is a business that develops and sells computer software. Some software companies specialize in a particular....." />
                        <RecruteurCard CompanyName="Elite Hangstroman" Companymap="Dhaka, Bangladesh" CompanyDescription="A software company is a business that develops and sells computer software. Some software companies specialize in a particular....." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recruteur