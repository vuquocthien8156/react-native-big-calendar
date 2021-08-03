import { ViewStyle } from 'react-native'

import {
  DateRangeHandler,
  EventCellStyle,
  EventRenderer,
  ICalendarEvent,
  Mode,
  WeekNum,
} from '../interfaces'

export interface CalendarProps<T> {
  events: ICalendarEvent<T>[]
  height: number
  overlapOffset?: number
  ampm?: boolean
  date?: Date
  eventCellStyle?: EventCellStyle<T>
  locale?: string
  hideNowIndicator?: boolean
  mode?: Mode
  scrollOffsetMinutes?: number
  showTime?: boolean
  style?: ViewStyle
  swipeEnabled?: boolean
  weekStartsOn?: WeekNum
  isRTL?: boolean
  onChangeDate?: DateRangeHandler
  onPressCell?: (date: Date) => void
  onPressDateHeader?: (date: Date) => void
  onPressEvent?: (event: ICalendarEvent<T>) => void
  renderEvent?: EventRenderer<T>
  weekEndsOn?: WeekNum
  maxVisibleEventCount?: number
}
declare function _Calendar<T>({
  events,
  height,
  ampm,
  date,
  eventCellStyle,
  locale,
  hideNowIndicator,
  mode,
  overlapOffset,
  scrollOffsetMinutes,
  showTime,
  style,
  swipeEnabled,
  weekStartsOn,
  isRTL,
  onChangeDate,
  onPressCell,
  onPressDateHeader,
  onPressEvent,
  renderEvent,
  weekEndsOn,
  maxVisibleEventCount,
}: CalendarProps<T>): JSX.Element
export declare const Calendar: typeof _Calendar
export {}
