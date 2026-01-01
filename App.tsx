
import React, { useState, useEffect } from 'react';
import { Step, Keyword } from './types';
import { KEYWORDS, HorseIcon } from './constants';
import { Button } from './components/Button';
import { generateGreeting } from './services/geminiService';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('landing');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [result, setResult] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);

  const toggleKeyword = (id: string) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(i => i !== id);
      }
      if (prev.length >= 4) return prev; 
      return [...prev, id];
    });
  };

  const handleGenerate = async () => {
    if (selectedIds.length === 0) return;
    setStep('generating');
    
    const selectedLabels = KEYWORDS
      .filter(k => selectedIds.includes(k.id))
      .map(k => k.label);
    
    const message = await generateGreeting(selectedLabels);
    setResult(message);
    setStep('result');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const reset = () => {
    setStep('landing');
    setSelectedIds([]);
    setResult('');
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col p-6 relative overflow-hidden">
      {/* Decorative Background elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute top-1/2 -left-20 w-60 h-60 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>

      <main className="flex-1 flex flex-col items-center justify-center z-10">
        
        {step === 'landing' && (
          <div className="text-center space-y-8">
            <div className="floating inline-block">
              <HorseIcon />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold text-rose-500 leading-tight">
                2026 병오년<br/>
                마음 배달부 🐴
              </h1>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white shadow-sm">
                <p className="text-gray-600 text-lg leading-relaxed">
                  함께 땀 흘리며 성장한 2025년!<br/>
                  <b>우리만의 소중한 기억</b>을 골라주시면<br/>
                  회원님께 드리는 특별한 인사를 전할게요! ✨
                </p>
              </div>
            </div>
            <Button onClick={() => setStep('select')} className="w-full text-xl py-4">
              함께한 추억 고르기 🪄
            </Button>
          </div>
        )}

        {step === 'select' && (
          <div className="w-full space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 tracking-tight">우리가 함께한 2025년은?</h2>
              <p className="text-gray-500 mt-1 font-medium">가장 기억에 남는 순간을 선택해 주세요 (1~4개)</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 max-h-[55vh] overflow-y-auto pr-1">
              {KEYWORDS.map((k) => (
                <button
                  key={k.id}
                  onClick={() => toggleKeyword(k.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border-2 flex flex-col items-start ${
                    selectedIds.includes(k.id) 
                    ? 'border-rose-400 bg-rose-50 ring-2 ring-rose-200 shadow-md' 
                    : 'border-white bg-white/80 hover:bg-white shadow-sm'
                  }`}
                >
                  <span className="text-2xl mb-1">{k.emoji}</span>
                  <span className={`font-bold text-[13px] leading-tight ${selectedIds.includes(k.id) ? 'text-rose-600' : 'text-gray-700'}`}>
                    {k.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <Button 
                onClick={handleGenerate} 
                className="w-full py-4 text-xl"
                disabled={selectedIds.length === 0}
              >
                진심 담은 메시지 받기 🪄
              </Button>
              <button 
                onClick={() => setStep('landing')}
                className="w-full text-gray-400 mt-4 text-sm font-bold"
              >
                처음으로
              </button>
            </div>
          </div>
        )}

        {step === 'generating' && (
          <div className="text-center space-y-6">
            <div className="flex justify-center space-x-2">
              <div className="w-4 h-4 bg-rose-300 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-4 h-4 bg-rose-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-4 bg-rose-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-rose-500">우리의 기억을 엮는 중...</h3>
              <p className="text-gray-500 italic">"함께 노력했던 소중한 시간들을<br/>따뜻한 문장으로 적어내려가고 있어요."</p>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="w-full space-y-6 animate-fadeIn">
            <div className="bg-white rounded-[2rem] p-8 mongle-shadow border-4 border-rose-100 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full border-2 border-rose-200 text-rose-400 font-bold text-sm shadow-sm whitespace-nowrap">
                From. 김민수 트레이너
              </div>
              
              <div className="min-h-[150px] flex items-center justify-center text-center">
                <p className="text-xl leading-relaxed text-gray-800 whitespace-pre-wrap font-medium">
                  {result}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-50 text-right">
                <p className="text-rose-400 font-bold italic">2026년에도 회원님 곁에 있을게요! 📮</p>
              </div>
            </div>

            <div className="space-y-3">
              <Button onClick={copyToClipboard} className="w-full py-4 bg-blue-400 hover:bg-blue-500">
                {isCopied ? '복사 완료! 💝' : '인사말 간직하기 📋'}
              </Button>
              <Button onClick={reset} variant="outline" className="w-full py-4">
                다른 기억으로 해보기 🔄
              </Button>
            </div>
          </div>
        )}
      </main>

      <footer className="py-6 text-center text-gray-400 text-xs">
        <p>© 2026 병오년 마음 배달부 | Mongle New Year</p>
      </footer>
    </div>
  );
};

export default App;
