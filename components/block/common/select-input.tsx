'use client'

import { IconArrowDown } from '@tabler/icons-react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Option {
  label: string
  value: string
  icon?: typeof IconArrowDown
}

interface SelectInputProps {
  placeholder: string
  options: Option[]
  onSelect: (value: string) => void
  defaultValue?: string
}

export default function SelectInput({
  placeholder,
  options,
  onSelect,
  defaultValue,
}: SelectInputProps) {
  return (
    <Select onValueChange={onSelect} defaultValue={defaultValue} indicatorPosition="right">
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            <div className="flex items-center gap-2">
              {option.icon && <option.icon className="h-4 w-4 shrink-0" />}
              <span className="truncate">{option.label}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
