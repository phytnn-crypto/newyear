
import { GoogleGenAI } from "@google/genai";

export const generateGreeting = async (keywords: string[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const keywordPrompt = keywords.join(', ');
  const prompt = `
    당신은 회원님의 건강과 성장을 진심으로 응원하는 '김민수 트레이너'입니다. 
    2026년 병오년(붉은 말의 해)을 맞아, 1년 동안 함께 고생하며 운동해온 회원님께 보낼 감동적이고 따뜻한 새해 인삿말을 작성해주세요.
    
    우리가 함께 공유한 올해의 기억 키워드는 다음과 같습니다: [${keywordPrompt}].
    
    요청 사항:
    1. 말투: 아주 다정하고, 몽글몽글하며, 회원님의 노력을 깊이 인정해주는 느낌 (해요체 또는 다정한 말투).
    2. 내용: 선택된 키워드들을 단순히 나열하는 것이 아니라, '우리가 함께 했기에 가능했던 변화'라는 점을 강조해주세요. 
    3. 중요 호칭 지침: 회원님의 이름을 모르기 때문에, 인사말 내에서 대상을 부를 때는 반드시 '회원님'이라는 호칭만 사용하세요. 'ㅇㅇㅇ님'이나 '[이름]' 같은 플레이스홀더를 절대 사용하지 마세요.
    4. 2026년 병오년의 '붉은 말'처럼, 내년에도 지치지 않고 즐겁게 함께 운동하며 더 멋진 일상을 만들어가자는 에너지를 전달해주세요.
    5. 분량: 4~6문장 내외로, 모바일에서 읽기 편하게 작성해주세요.
    6. 이모지: 따뜻하고 활기찬 느낌의 이모지를 적절히 사용해주세요 (👟, 🔥, 🌱, 💖, 🐴 등).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.85,
        topP: 0.95,
      },
    });

    return response.text || "올 한 해 저를 믿고 함께해주셔서 정말 감사해요! 회원님의 성장을 곁에서 지켜볼 수 있어 행복한 2025년이었습니다. 2026년에도 우리 건강하게 함께해요! 새해 복 많이 받으세요! 🐴👟";
  } catch (error) {
    console.error("Error generating greeting:", error);
    return "함께해주신 진심에 늘 감사드려요! 2026년 병오년에도 회원님의 모든 걸음걸음을 응원할게요. 새해 복 듬뿍 받으시고 언제나 건강하세요! 💖";
  }
};
