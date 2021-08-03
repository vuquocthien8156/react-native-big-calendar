import dayjs from 'dayjs'
import { ViewStyle } from 'react-native'

import { ICalendarEvent } from '../interfaces'

interface CalendarHeaderProps<T> {
  dateRange: dayjs.Dayjs[]
  cellHeight: number
  style: ViewStyle
  allDayEvents: ICalendarEvent<T>[]
  isRTL: boolean
  onPressDateHeader?: (date: Date) => void
}
declare function _CalendarHeader<T>({
  dateRange,
  cellHeight,
  style,
  allDayEvents,
  isRTL,
  onPressDateHeader,
}: CalendarHeaderProps<T>): JSX.Element
export declare const CalendarHeader: typeof _CalendarHeader
export {}
