"use client"

import React, { useState, useEffect } from 'react'

interface MortgageCalculatorProps {
    defaultPrice?: number
}

export default function MortgageCalculator({ defaultPrice = 1000000 }: MortgageCalculatorProps) {
    const [price, setPrice] = useState(defaultPrice)
    const [downPaymentPercent, setDownPaymentPercent] = useState(20)
    const [interestRate, setInterestRate] = useState(6.5)
    const [loanTermYears, setLoanTermYears] = useState(30)
    const [monthlyPayment, setMonthlyPayment] = useState(0)

    useEffect(() => {
        const principal = price - (price * (downPaymentPercent / 100))
        const monthlyInterest = interestRate / 100 / 12
        const numberOfPayments = loanTermYears * 12

        if (interestRate === 0) {
            setMonthlyPayment(principal / numberOfPayments)
        } else {
            const payment =
                (principal * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) /
                (Math.pow(1 + monthlyInterest, numberOfPayments) - 1)
            setMonthlyPayment(payment)
        }
    }, [price, downPaymentPercent, interestRate, loanTermYears])

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
        }).format(value)
    }

    return (
        <div className="bg-white dark:bg-card p-8 max-w-2xl mx-auto font-sans text-gray-900 key={1}">
            <h3 className="text-2xl font-light mb-8 uppercase tracking-widest border-b border-gray-200 dark:border-border pb-4 text-foreground">
                Mortgage Calculator
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Home Price */}
                <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                        Home Price
                    </label>
                    <div className="relative">
                        <span className="absolute left-0 bottom-2 text-lg text-gray-400">$</span>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full pl-6 pr-0 py-2 text-xl bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white outline-none transition-colors duration-300 placeholder-gray-300 dark:placeholder-gray-600 text-foreground"
                            placeholder="0"
                        />
                    </div>
                </div>

                {/* Down Payment */}
                <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                        Down Payment ({downPaymentPercent}%)
                    </label>
                    <div className="relative">
                        <span className="absolute left-0 bottom-2 text-lg text-gray-400">$</span>
                        <input
                            type="number"
                            value={(price * (downPaymentPercent / 100)).toFixed(0)}
                            onChange={(e) => {
                                const val = Number(e.target.value)
                                setDownPaymentPercent((val / price) * 100)
                            }}
                            className="w-full pl-6 pr-0 py-2 text-xl bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white outline-none transition-colors duration-300 placeholder-gray-300 dark:placeholder-gray-600 text-foreground"
                            placeholder="0"
                        />
                    </div>
                </div>

                {/* Interest Rate */}
                <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                        Interest Rate (%)
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full pl-0 pr-0 py-2 text-xl bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white outline-none transition-colors duration-300 placeholder-gray-300 dark:placeholder-gray-600 text-foreground"
                            placeholder="0"
                        />
                        <span className="absolute right-0 bottom-2 text-lg text-gray-400">%</span>
                    </div>
                </div>

                {/* Loan Term */}
                <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                        Loan Term (Years)
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            value={loanTermYears}
                            onChange={(e) => setLoanTermYears(Number(e.target.value))}
                            className="w-full pl-0 pr-0 py-2 text-xl bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-black dark:focus:border-white outline-none transition-colors duration-300 placeholder-gray-300 dark:placeholder-gray-600 text-foreground"
                            placeholder="30"
                        />
                        <span className="absolute right-0 bottom-2 text-lg text-gray-400">Years</span>
                    </div>
                </div>
            </div>

            {/* Result */}
            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-border flex flex-col md:flex-row justify-between items-baseline">
                <span className="text-sm uppercase tracking-widest text-gray-500 dark:text-muted-foreground">
                    Estimated Monthly Payment
                </span>
                <span className="text-4xl font-light text-black dark:text-white mt-2 md:mt-0">
                    {formatCurrency(monthlyPayment)}
                    <span className="text-lg text-gray-400 ml-1">/mo</span>
                </span>
            </div>
        </div>
    )
}
