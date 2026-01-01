
import React from 'react';
import { Keyword } from './types';

export const KEYWORDS: Keyword[] = [
  { id: 'growth', label: '함께한 성장', emoji: '🌱', color: 'bg-green-100 text-green-600' },
  { id: 'support', label: '든든한 응원', emoji: '🙌', color: 'bg-purple-100 text-purple-600' },
  { id: 'passion', label: '뜨거운 열정', emoji: '🔥', color: 'bg-red-100 text-red-600' },
  { id: 'deep_talk', label: '진솔한 대화', emoji: '💬', color: 'bg-teal-100 text-teal-600' },
  { id: 'kindness', label: '다정함', emoji: '🌸', color: 'bg-rose-100 text-rose-600' },
  { id: 'daily', label: '소소한 일상 공유', emoji: '☕', color: 'bg-orange-100 text-orange-600' },
  { id: 'comfort', label: '따뜻한 위로', emoji: '🧸', color: 'bg-blue-100 text-blue-600' },
  { id: 'laughter', label: '함께 웃던 순간', emoji: '😆', color: 'bg-pink-100 text-pink-600' },
  { id: 'lighter_body', label: '처음보다 가벼워진 몸', emoji: '🤸', color: 'bg-sky-100 text-sky-600' },
  { id: 'exercise', label: '운동이 일상이 된 해', emoji: '👟', color: 'bg-indigo-100 text-indigo-600' },
  { id: 'self_care', label: '나를 돌보기 시작함', emoji: '💖', color: 'bg-amber-100 text-amber-600' },
  { id: 'light_daily', label: '일상이 가벼워짐', emoji: '☁️', color: 'bg-slate-100 text-slate-600' },
];

export const HorseIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-rose-400">
    <path d="M19 14C19 14 21 13 21 10C21 7 18 5 15 5H14C14 5 14 3 11 3C8 3 7 5 7 5C7 5 3 5 3 9C3 13 5 14 5 14L4 19C4 19 4 21 6 21C8 21 8 19 8 19L9 15H14L15 19C15 19 15 21 17 21C19 21 19 19 19 19L18 14Z" fill="currentColor" opacity="0.8"/>
    <circle cx="16" cy="8" r="1" fill="white"/>
  </svg>
);
