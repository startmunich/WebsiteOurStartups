import type { Metadata } from 'next'
import StartGoesBayAreaContent from './components/StartGoesBayAreaContent'

export const metadata: Metadata = {
    title: 'START goes Bay Area | START Munich',
    description:
        'A exchange program by START Munich connecting entrepreneurial talent with the Bay Area ecosystem.',
}

export default function StartGoesBayAreaPage() {
    return <StartGoesBayAreaContent />
}
