/**
 * IMAGIN'ART HUB — FEEDBACK & SUPPORT
 * Auteur : Imagin'Art — Laabidi Abdelghani
 * Description : Orchestration du formulaire, validation stricte, multilingue i18n et API Web3Forms.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ═══ DICTIONNAIRE MULTILINGUE (i18n FR / AR) ═══
    const translations = {
        fr: {
            heroPill: "Centre de Contact Technique",
            heroTitle: "Assistance, Retours &amp; Suggestions",
            heroSubtitle: "Formulaire officiel de transmission pour Imagin'Art Suite, Wlidi et nos solutions logicielles. Vos retours sont directement traités par le concepteur.",
            step1Label: "Sélectionnez le projet concerné",
            tagExtension: "Illustrator",
            suiteDesc: "Extension d'automatisation prépresse, imposition &amp; repères.",
            tagDesktop: "Portable",
            wlidiDesc: "Application de saisie vocale des notes Massar pour enseignants.",
            otherTitle: "Autre Projet / Idée",
            tagGeneral: "Global",
            otherDesc: "Nouvelle idée d'outil, travail d'atelier, script sur mesure ou question générale.",
            step2Label: "Nature de votre message",
            pillBug: "Signalement de Bug",
            pillIdea: "Suggestion / Idée",
            pillReview: "Avis &amp; Témoignage",
            pillQuestion: "Question &amp; Assistance",
            step3LabelBug: "Détails techniques du dysfonctionnement",
            step3LabelIdea: "Détails de votre suggestion / idée",
            step3LabelReview: "Votre évaluation &amp; avis",
            step3LabelQuestion: "Votre question ou demande d'assistance",
            labelOS: "Système d'exploitation",
            optOther: "Autre système",
            labelVersion: "Version du logiciel",
            phVersion: "ex: Illustrator 2026, Suite v4.0, Wlidi v1.0",
            labelSeverity: "Impact du dysfonctionnement",
            sevHigh: "Bloquant (Crash direct)",
            sevMed: "Gênant (Partiel)",
            sevLow: "Mineur (Affichage, détail)",
            labelBugDesc: "Description du problème et étapes pour le reproduire",
            phBugDesc: "Expliquez ce que vous faisiez juste avant l'anomalie, et quel résultat inattendu s'est produit...",
            labelMediaLink: "Lien de capture d'écran ou vidéo",
            tagOptional: "(Optionnel)",
            phMediaLink: "https://drive.google.com/... ou lien Imgur, WeTransfer, etc.",
            labelIdeaTitle: "Titre de votre idée ou fonction souhaitée",
            phIdeaTitle: "ex: Option d'imposition en livret, dictée des demi-points...",
            labelIdeaNeed: "Quel besoin cette idée résoudra-t-elle dans votre flux de travail ?",
            phIdeaNeed: "Décrivez votre méthode actuelle et le gain de temps que cela vous apporterait...",
            labelRating: "Votre évaluation globale",
            rating1: "1/5 — Insuffisant",
            rating2: "2/5 — Passable",
            rating3: "3/5 — Bon outil",
            rating4: "4/5 — Très satisfaisant & pratique",
            rating5: "5/5 — Excellent & Indispensable",
            labelReviewComment: "Votre avis / retour d'expérience",
            phReviewComment: "Ce que vous appréciez le plus dans l'application, sa fiabilité, sa rapidité...",
            labelQuestionSubject: "Objet de votre question",
            phQuestionSubject: "ex: Compatibilité, installation réseau...",
            labelQuestionDetails: "Votre question en détail",
            phQuestionDetails: "Détaillez votre question pour nous permettre de vous répondre au mieux...",
            step4Label: "Vos coordonnées",
            labelName: "Nom &amp; Prénom / Atelier",
            phName: "ex: Karim Benjelloun, Atelier Print...",
            labelEmail: "Adresse e-mail",
            phEmail: "votre.email@domaine.com",
            btnSubmit: "Envoyer le message",
            btnSending: "Transmission en cours...",
            reassuranceText: "Vos informations sont transmises de manière sécurisée par e-mail direct à Laabidi Abdelghani (laabidi.cloud@gmail.com).",
            successTitle: "Message envoyé avec succès",
            successDesc: "Votre message a été transmis directement à Laabidi Abdelghani. Une réponse vous parviendra dans les meilleurs délais sur votre adresse e-mail.",
            sumProduct: "Projet :",
            sumType: "Nature :",
            btnAnother: "Envoyer un autre message",
            btnPortfolio: "Consulter le Portfolio →",
            errRequiredFields: "Veuillez renseigner les champs obligatoires signalés par un astérisque rouge (*).",
            errInvalidEmail: "Veuillez saisir une adresse e-mail valide pour que nous puissions vous répondre.",
            errFileSize: "Le fichier sélectionné dépasse la taille maximale autorisée de 5 Mo.",
            errNetwork: "Une anomalie est survenue lors de l'envoi. Veuillez vérifier votre connexion ou réessayer."
        },
        ar: {
            heroPill: "مركز التواصل والدعم الفني",
            heroTitle: "الدعم الفني، الملاحظات والمقترحات",
            heroSubtitle: "الاستمارة الرسمية للتواصل والملاحظات حول برامج Imagin'Art Suite و Wlidi. تتم مراجعة كافة رسائلكم مباشرة من طرف المطور.",
            step1Label: "اختر البرنامج أو المشروع المعني",
            tagExtension: "إليستريتور",
            suiteDesc: "إضافة أتمتة ما قبل الطباعة، التركيب الطباعي وعلامات القص.",
            tagDesktop: "محمول",
            wlidiDesc: "تطبيق مسك نقط مسار بالصوت للأساتذة الكرام بدون إنترنت.",
            otherTitle: "مشروع أو فكرة أخرى",
            tagGeneral: "عام",
            otherDesc: "اقتراح أداة جديدة، عمل أستوديو، سكربت مخصص أو استفسار عام.",
            step2Label: "نوع الرسالة",
            pillBug: "إبلاغ عن عطل",
            pillIdea: "اقتراح فكرة",
            pillReview: "إبداء رأي وتقييم",
            pillQuestion: "سؤال واستفسار",
            step3LabelBug: "التفاصيل التقنية للمشكلة",
            step3LabelIdea: "تفاصيل فكرتك أو الميزة المقترحة",
            step3LabelReview: "تقييمك وانطباعك عن البرنامج",
            step3LabelQuestion: "سؤالك أو طلب المساعدة",
            labelOS: "نظام التشغيل",
            optOther: "نظام آخر",
            labelVersion: "إصدار البرنامج",
            phVersion: "مثال : Illustrator 2026, Suite v4.0, Wlidi v1.0",
            labelSeverity: "درجة تأثير المشكلة",
            sevHigh: "معطل تماماً (إغلاق مفاجئ)",
            sevMed: "مزعج (خلل جزئي)",
            sevLow: "بسيط (مظهر، تفصيل شكلي)",
            labelBugDesc: "وصف العطل والخطوات التي أدت إليه",
            phBugDesc: "اشرح ماذا كنت تفعل قبل حدوث المشكلة وما هي النتيجة غير المتوقعة التي ظهرت...",
            labelMediaLink: "رابط لقطة شاشة أو فيديو توضيحي",
            tagOptional: "(اختياري)",
            phMediaLink: "رابط Google Drive أو Imgur أو WeTransfer...",
            labelIdeaTitle: "عنوان الفكرة أو الميزة المطلوبة",
            phIdeaTitle: "مثال : إضافة خيار المونتاج على شكل كتيب، إملاء أنصاف النقط...",
            labelIdeaNeed: "ما هو الاحتياج الذي ستلبيه هذه الفكرة في عملك ؟",
            phIdeaNeed: "صف طريقتك الحالية والوقت الذي ستوفره لك هذه الميزة...",
            labelRating: "تقييمك الإجمالي",
            rating1: "1/5 — غير كافٍ",
            rating2: "2/5 — مقبول",
            rating3: "3/5 — أداة جيدة",
            rating4: "4/5 — مفيد وعملي جداً",
            rating5: "5/5 — ممتاز ولا غنى عنه",
            labelReviewComment: "رأيك وانطباعك الصادق",
            phReviewComment: "أكثر ما يعجبك في التطبيق، دقته، سرعته، اعتماديته...",
            labelQuestionSubject: "موضوع السؤال",
            phQuestionSubject: "مثال : التوافق، التثبيت على الشبكة...",
            labelQuestionDetails: "سؤالك بالتفصيل",
            phQuestionDetails: "وضح سؤالك بالتفصيل ليتسنى لنا إجابتك بأدق شكل ممكن...",
            step4Label: "بيانات التواصل",
            labelName: "الاسم الكامل / اسم المطبعة أو المؤسسة",
            phName: "مثال : ذ. كريم بن جلون، مطبعة الأمل...",
            labelEmail: "البريد الإلكتروني",
            phEmail: "your.email@example.com",
            btnSubmit: "إرسال الرسالة",
            btnSending: "جاري الإرسال...",
            reassuranceText: "يتم إرسال رسالتكم بشكل آمن ومباشر عبر البريد الإلكتروني إلى عبد الغني لعبيدي (laabidi.cloud@gmail.com).",
            successTitle: "تم إرسال رسالتك بنجاح",
            successDesc: "تم توجيه رسالتك مباشرة إلى عبد الغني لعبيدي. سيصلك الرد في أقرب وقت عبر بريدك الإلكتروني.",
            sumProduct: "البرنامج :",
            sumType: "النوع :",
            btnAnother: "إرسال رسالة أخرى",
            btnPortfolio: "تصفح معرض الأعمال (Portfolio) ←",
            errRequiredFields: "يرجى ملء الحقول الإلزامية المشار إليها بالنجمة الحمراء (*).",
            errInvalidEmail: "يرجى إدخال عنوان بريد إلكتروني صحيح للتمكن من الرد عليكم.",
            errFileSize: "حجم الملف المرفق يتجاوز الحد المسموح به (5 ميغابايت).",
            errNetwork: "تعذر إرسال الرسالة. يرجى التأكد من اتصال الإنترنت والمحاولة مجدداً."
        }
    };

    let currentLang = 'fr';

    // ═══ DOM ELEMENTS ═══
    const htmlEl = document.documentElement;
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langLabel = document.getElementById('langLabel');
    const feedbackForm = document.getElementById('feedbackForm');
    const selectedProductInput = document.getElementById('selectedProductInput');
    const selectedFeedbackTypeInput = document.getElementById('selectedFeedbackTypeInput');
    const selectedRatingInput = document.getElementById('selectedRatingInput');
    const emailSubject = document.getElementById('emailSubject');
    const replyToEmail = document.getElementById('replyToEmail');
    const step3TitleText = document.getElementById('step3TitleText');
    const formErrorMsg = document.getElementById('formErrorMsg');
    const btnSubmitForm = document.getElementById('btnSubmitForm');
    const btnSubmitText = document.getElementById('btnSubmitText');
    const btnSpinner = document.getElementById('btnSpinner');
    const successOverlay = document.getElementById('successOverlay');
    const btnResetForm = document.getElementById('btnResetForm');
    const sumProductVal = document.getElementById('sumProductVal');
    const sumTypeVal = document.getElementById('sumTypeVal');

    // Panels
    const panels = {
        bug: document.getElementById('panelBug'),
        idea: document.getElementById('panelIdea'),
        review: document.getElementById('panelReview'),
        question: document.getElementById('panelQuestion')
    };

    // Product Cards & Pills
    const productCards = document.querySelectorAll('.product-card');
    const typePills = document.querySelectorAll('.type-pill');

    // Rating Stars
    const starBtns = document.querySelectorAll('.star-btn');
    const ratingTextBadge = document.getElementById('ratingTextBadge');

    // Inputs to monitor for validation removal
    const inputElements = document.querySelectorAll('.form-input, .form-textarea');
    inputElements.forEach(inp => {
        inp.addEventListener('input', () => {
            inp.classList.remove('input-error');
            clearError();
        });
    });

    // ═══ 1. GESTION DU MULTILINGUE (i18n) ═══
    function setLanguage(lang) {
        currentLang = lang;
        htmlEl.setAttribute('lang', lang);
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        if (langLabel) {
            langLabel.textContent = lang === 'ar' ? 'Français' : 'العربية';
        }

        // Traduction ciblée : met à jour uniquement les éléments sans écraser les astérisques
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Traduction des placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        updateStep3Title(selectedFeedbackTypeInput.value);
        updateRatingBadge(parseInt(selectedRatingInput.value, 10));
    }

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'fr' ? 'ar' : 'fr';
            setLanguage(newLang);
        });
    }

    // ═══ 2. SÉLECTION DU PRODUIT ═══
    const productNames = {
        suite: "Imagin'Art Suite",
        wlidi: "Wlidi (وليدي)",
        other: "Autre Projet / Idée"
    };

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            productCards.forEach(c => {
                c.classList.remove('active');
                c.setAttribute('aria-checked', 'false');
            });
            card.classList.add('active');
            card.setAttribute('aria-checked', 'true');

            const prodKey = card.getAttribute('data-product');
            selectedProductInput.value = productNames[prodKey] || "Imagin'Art";
            updateEmailSubject();
        });

        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });

    // ═══ 3. SÉLECTION DU TYPE DE RETOUR ═══
    const typeNamesFR = {
        bug: "Signalement de Bug",
        idea: "Suggestion / Idée",
        review: "Avis & Témoignage",
        question: "Question & Assistance"
    };

    function updateStep3Title(type) {
        const titleKeyMap = {
            bug: 'step3LabelBug',
            idea: 'step3LabelIdea',
            review: 'step3LabelReview',
            question: 'step3LabelQuestion'
        };
        const key = titleKeyMap[type] || 'step3LabelBug';
        if (step3TitleText && translations[currentLang][key]) {
            step3TitleText.innerHTML = translations[currentLang][key];
        }
    }

    function switchPanel(type) {
        selectedFeedbackTypeInput.value = type;
        Object.keys(panels).forEach(key => {
            if (panels[key]) {
                panels[key].classList.toggle('active', key === type);
            }
        });
        updateStep3Title(type);
        updateEmailSubject();
    }

    typePills.forEach(pill => {
        pill.addEventListener('click', () => {
            typePills.forEach(p => {
                p.classList.remove('active');
                p.setAttribute('aria-checked', 'false');
            });
            pill.classList.add('active');
            pill.setAttribute('aria-checked', 'true');

            const type = pill.getAttribute('data-type');
            switchPanel(type);
        });
    });

    // ═══ 4. NOTATION PAR ÉTOILES (PANNEAU AVIS) ═══
    function updateRatingBadge(rating) {
        const ratingKey = `rating${rating}`;
        if (ratingTextBadge && translations[currentLang][ratingKey]) {
            ratingTextBadge.textContent = translations[currentLang][ratingKey];
        }
    }

    starBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const rating = parseInt(btn.getAttribute('data-rating'), 10);
            selectedRatingInput.value = rating;

            starBtns.forEach(s => {
                const r = parseInt(s.getAttribute('data-rating'), 10);
                s.classList.toggle('active', r <= rating);
            });

            updateRatingBadge(rating);
        });

        btn.addEventListener('mouseenter', () => {
            const rating = parseInt(btn.getAttribute('data-rating'), 10);
            starBtns.forEach(s => {
                const r = parseInt(s.getAttribute('data-rating'), 10);
                s.style.color = r <= rating ? '#fbbf24' : 'rgba(255, 255, 255, 0.15)';
            });
        });

        btn.addEventListener('mouseleave', () => {
            const currentRating = parseInt(selectedRatingInput.value, 10);
            starBtns.forEach(s => {
                const r = parseInt(s.getAttribute('data-rating'), 10);
                s.style.color = '';
                s.classList.toggle('active', r <= currentRating);
            });
        });
    });

    // ═══ 5. SUJET DYNAMIQUE ═══
    function updateEmailSubject() {
        const prod = selectedProductInput.value || "Imagin'Art";
        const type = typeNamesFR[selectedFeedbackTypeInput.value] || "Retour";
        if (emailSubject) {
            emailSubject.value = `[${prod}] ${type} — Support Hub`;
        }
    }
    updateEmailSubject();

    // ═══ 7. VALIDATION DU FORMULAIRE ═══
    function showError(msg) {
        if (formErrorMsg) {
            formErrorMsg.textContent = msg;
            formErrorMsg.style.display = 'block';
            formErrorMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    function clearError() {
        if (formErrorMsg) {
            formErrorMsg.textContent = '';
            formErrorMsg.style.display = 'none';
        }
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ═══ 8. SOUMISSION WEB3FORMS (AJAX PAR E-MAIL DIRECT) ═══
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            clearError();

            // Retirer les marquages d'erreur précédents
            inputElements.forEach(inp => inp.classList.remove('input-error'));

            const t = translations[currentLang];
            const userNameInput = document.getElementById('userName');
            const userEmailInput = document.getElementById('userEmail');
            const userName = userNameInput.value.trim();
            const userEmail = userEmailInput.value.trim();
            const type = selectedFeedbackTypeInput.value;

            let hasError = false;

            // Vérification Identité
            if (!userName) {
                userNameInput.classList.add('input-error');
                hasError = true;
            }

            if (!userEmail) {
                userEmailInput.classList.add('input-error');
                hasError = true;
            } else if (!isValidEmail(userEmail)) {
                userEmailInput.classList.add('input-error');
                showError(t.errInvalidEmail);
                return;
            }

            // Vérification selon le type
            if (type === 'bug') {
                const bugDescInput = document.getElementById('bugDesc');
                if (!bugDescInput.value.trim()) {
                    bugDescInput.classList.add('input-error');
                    hasError = true;
                }
            } else if (type === 'idea') {
                const ideaTitleInput = document.getElementById('ideaTitle');
                const ideaNeedInput = document.getElementById('ideaNeed');
                if (!ideaTitleInput.value.trim()) {
                    ideaTitleInput.classList.add('input-error');
                    hasError = true;
                }
                if (!ideaNeedInput.value.trim()) {
                    ideaNeedInput.classList.add('input-error');
                    hasError = true;
                }
            } else if (type === 'review') {
                // Le commentaire textuel d'avis est 100% optionnel (la note par étoiles suffit)
            } else if (type === 'question') {
                const questionSubjectInput = document.getElementById('questionSubject');
                const questionDetailsInput = document.getElementById('questionDetails');
                if (!questionSubjectInput.value.trim()) {
                    questionSubjectInput.classList.add('input-error');
                    hasError = true;
                }
                if (!questionDetailsInput.value.trim()) {
                    questionDetailsInput.classList.add('input-error');
                    hasError = true;
                }
            }

            if (hasError) {
                showError(t.errRequiredFields);
                // Focaliser le premier champ en erreur
                const firstErr = document.querySelector('.input-error');
                if (firstErr) firstErr.focus();
                return;
            }

            // Mettre à jour replyTo pour répondre directement dans Gmail
            if (replyToEmail) {
                replyToEmail.value = userEmail;
            }

            // État de chargement
            btnSubmitForm.disabled = true;
            btnSubmitText.textContent = t.btnSending;
            btnSpinner.style.display = 'inline-block';

            // Préparation ciblée des données : envoyer STRICTEMENT les champs de la section active
            const formData = new FormData();
            formData.append('access_key', document.getElementById('web3formsKey').value);
            formData.append('subject', emailSubject.value);
            formData.append('from_name', userName);
            formData.append('replyto', userEmail);
            formData.append('Produit', selectedProductInput.value);
            formData.append('Type_de_demande', typeNamesFR[type] || type);

            if (type === 'bug') {
                formData.append('Systeme_OS', document.getElementById('bugOS').value);
                const bugVersion = document.getElementById('bugVersion').value.trim();
                if (bugVersion) formData.append('Version_du_logiciel', bugVersion);

                const severityChecked = document.querySelector('input[name="severity"]:checked');
                if (severityChecked) formData.append('Impact_du_bug', severityChecked.value);

                formData.append('Description_du_probleme', document.getElementById('bugDesc').value.trim());

                const mediaLink = document.getElementById('bugMediaLink').value.trim();
                if (mediaLink) formData.append('Lien_capture_ou_video', mediaLink);
            } else if (type === 'idea') {
                formData.append('Titre_de_l_idee', document.getElementById('ideaTitle').value.trim());
                formData.append('Besoin_metier_Gain', document.getElementById('ideaNeed').value.trim());
            } else if (type === 'review') {
                formData.append('Evaluation', `${selectedRatingInput.value} / 5 etoiles`);
                const reviewComment = document.getElementById('reviewComment').value.trim();
                if (reviewComment) formData.append('Avis_Temoignage', reviewComment);
            } else if (type === 'question') {
                formData.append('Objet', document.getElementById('questionSubject').value.trim());
                formData.append('Question_detaillee', document.getElementById('questionDetails').value.trim());
            }

            formData.append('Nom_Complet', userName);
            formData.append('Email_Client', userEmail);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // Succès !
                    if (sumProductVal) sumProductVal.textContent = selectedProductInput.value;
                    if (sumTypeVal) sumTypeVal.textContent = typeNamesFR[type] || type;

                    feedbackForm.style.display = 'none';
                    if (successOverlay) {
                        successOverlay.style.display = 'block';
                        successOverlay.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                } else {
                    showError(result.message || t.errNetwork);
                }
            } catch (err) {
                console.error("Erreur Web3Forms:", err);
                showError(t.errNetwork);
            } finally {
                btnSubmitForm.disabled = false;
                btnSubmitText.textContent = t.btnSubmit;
                btnSpinner.style.display = 'none';
            }
        });
    }

    // ═══ 8. RÉINITIALISER POUR UN AUTRE MESSAGE ═══
    if (btnResetForm) {
        btnResetForm.addEventListener('click', () => {
            if (feedbackForm) {
                feedbackForm.reset();
                inputElements.forEach(inp => inp.classList.remove('input-error'));
                clearError();
                feedbackForm.style.display = 'block';
            }
            if (successOverlay) {
                successOverlay.style.display = 'none';
            }

            if (productCards[0]) productCards[0].click();
            if (typePills[0]) typePills[0].click();

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Initialisation en Français par défaut
    setLanguage('fr');
});
