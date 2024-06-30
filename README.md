# Window AI Playground

Welcome to the Window AI Playground! This repository is a test environment for the new built-in technology, Window AI, which integrates AI models directly into the browser. This technology aims to revolutionize AI-powered web applications by leveraging on-device AI for improved performance, privacy, and user experience.

## Project Overview

When building features with AI models on the web, developers often rely on server-side solutions due to the large size of generative AI models. This can be impractical as it requires each site to download these models on page load. Built-in AI in the browser offers a hybrid solution, providing the benefits of both server-side and on-device AI.

The Window AI Playground focuses on the Gemini Nano model, the most efficient version of the Gemini family of large language models (LLMs). Gemini Nano is designed to run locally on most modern desktop and laptop computers, allowing web applications to perform AI-powered tasks without needing to deploy or manage their own AI models.

## Benefits of Built-in AI

### For Developers

- **Ease of Deployment**: The browser handles model distribution and updates, reducing the burden on developers.
- **Hardware Acceleration**: Optimized performance across various hardware, including GPU, NPU, and CPU.
- **Lower Costs**: No need to manage server-side storage, memory budgets, or serving costs.

### For Users

- **Privacy**: Local processing of sensitive data enhances privacy.
- **Performance**: Near-instant results without server round trips.
- **Offline Usage**: AI features accessible even without an internet connection.
- **Hybrid AI**: Combines on-device and server-side AI for optimal performance and coverage.

## Getting Started

To start using the Window AI Playground, follow these steps:

1. **Install Chrome Dev Canary**: This project requires the Chrome Dev Canary browser.
2. **Enable Flags**: Ensure the following flags are enabled:
   - `Prompt API for Gemini Nano`

### Prerequisites

- Chrome Dev Canary
- Basic understanding of AI models and web development

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/emre-cil/window-ai-playground.git
   cd window-ai-playground
   ```

2. **Enable required Chrome flags**:

   - Open Chrome Dev Canary and navigate to `chrome://flags`.
   - Search for `Prompt API for Gemini Nano` and enable it.

3. **Run the project**:
   - Open `index.html` in Chrome Dev Canary.

## Contributing

We welcome contributions to improve the Window AI Playground. Please fork the repository, create a feature branch, and submit a pull request with your changes.

## Feedback

Your feedback is invaluable in shaping the future of built-in AI. Join our early preview program to provide input on early-stage ideas and test in-progress APIs through local prototyping.

- **Join the Chrome AI Developer Public Announcements Group**: Stay informed about new API releases and updates.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue in the repository or reach out to the maintainers.

---

**Note**: This implementation of built-in AI with Gemini Nano is an experimental feature and may change as we test and address feedback.
