'use client'

import { IconCalendar, IconX } from '@tabler/icons-react'
import { format } from 'date-fns'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

interface DatePickerInputProps {
  date: Date | undefined
  onDateChange: (date: Date | undefined) => void
  placeholder?: string
}

export default function DatePickerInput({
  date: initialDate,
  onDateChange,
  placeholder,
}: DatePickerInputProps) {
  const [date, setDate] = React.useState<Date | undefined>(initialDate)

  const handleReset = (e: React.MouseEvent<HTMLElement>) => {
    setDate(undefined)
    e.preventDefault()
  }

  const handleSelect = (selected: Date | undefined) => {
    setDate(selected)
    onDateChange(selected)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative w-[250px]">
          <Button
            type="button"
            variant="outline"
            mode="input"
            placeholder={!date}
            className="w-full"
          >
            <IconCalendar />
            {date ? format(date, 'PPP') : <span>{placeholder || 'Pick a date'}</span>}
          </Button>
          {date && (
            <Button
              type="button"
              variant="dim"
              size="sm"
              className="absolute -end-0 top-1/2 -translate-y-1/2"
              onClick={handleReset}
            >
              <IconX />
            </Button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={handleSelect} autoFocus />
      </PopoverContent>
    </Popover>
  )
}
