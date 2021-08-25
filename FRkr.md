# FRkr



    au_moins( nombre1, individus2 )
    au_plus( nombre1, individus2 )
    moins_de( nombre1, individus2 )
    plus_de( nombre1, individus2 )
    entre( nombre1, nombre2, individus3 )
    quelques( individus1 )
    aucun( individu1 )

= un certain `nombre` de `individus`



    instance_de( individu1, concept2 )

= un `individu1` est une instance d'un `concept2`



    non_instance_de( individu1, concept2 )

= un `individu1` n'est pas une instance d'un `concept2`



    relation_entre( relation1, individu2, individu3 )

= il y a une `relation1` entre un `individu2` et un autre `individu3`



    generalise_relation( relation1, relation2 )

= une `relation1` généralise une autre `relation2`



    generalise_concept( concept1, concept2 )

= un `concept1` généralise un autre `concept2`



    concepts_equivalents( concept1, concept2 )

= un `concept1` a les mêmes instances qu'un autre `concept2`



    individus_distincts( individu1, individu2 )

= un `individu1` et un `individu2` ne sont pas le même individu



    relations_incompatibles( relation1, relation2 )

= 2 individus ne peuvent pas être liés à la fois par une `relation1` et une autre `relation2`



    intersection_concepts( concept1, concept2, concept3 )

= les individus d'un `concept1` sont des instances à la fois d'un `concept2` et d'un autre `concept3`



    union_concepts( concept1, concept2, concept3 )

= les individus d'un `concept1` sont instances soit d'un `concept2` soit d'un autre `concept3`



    concept_tout( concept1 )

= tous les individus sont une instance d'un `concept1`



    concept_rien( concept1 )

= un `concept1` n'a aucune instance



    concept_un_tel_que( concept1, relation2, concept3 )

= un `concept1` contient les individus ayant une `relation2` avec au moins une instance appartenant à un `concept3`



    concept_tous_tels_que( concept1, relation2, concept3 )

= un `concept1` contient les individus ayant une `relation2` avec des instances appartenant toutes à un `concept3`



    concept_aucun_tel_que( concept1, relation2, concept3 )

= un `concept1` contient les individus n'ayant aucune `relation2` avec une instance appartenant à un `concept3`



    le_plus( individu1, aspect2, concept3 )
    le_moins( individu1, aspect2, concept3 )

= `individu1` est celui qui a un `aspect2` le plus / moins prononcé parmi ceux du `concept3`



    les_n_plus( concept1, nombre2, aspect3, concept4 )
    les_n_moins( concept1, nombre2, aspect3, concept4 )

= les individus du `concept1` sont les `nombre2` ayant un `aspect3` le plus / moins prononcé parmi ceux du `concept4`



    est_plus_que( individu1, aspect2, individu3 )
    est_moins_que( individu1, aspect2, individu3 )
    est_autant_que( individu1, aspect2, individu3 )

= un `individu1` a un `aspect2` plus / moins / autant prononcé qu'un `individu3`



    en_contexte( contexte1, affirmation2 )

= une `affirmation2` est à entendre dans le `contexte1`



    pour_chaque( liste )

= contexte distributif pour chaque élément de la `liste`



    nombre_parmi( quantifieur, liste )

= contexte pour un certain nombre `quantifieur` d'éléments de la `liste`



    ce_qui_parmi( critère, liste )

= contexte pour les éléments de la `liste` qui correspondent au `critère`



    sauf_ce_qui_parmi( critère, liste )

= contexte pour les éléments de la `liste` qui ne correspondent pas au `critère`



    pour_tous( liste )

= contexte pour la `liste` entière



    il_existe_unique( chose )

= affirmation qu'une `chose` existe en 1 exemplaire



    il_existe_plusieurs( nombre, chose )

= affirmation qu'une `chose` existe en `nombre` exemplaires



    il_n_existe_aucun( chose )

= affirmation qu'une `chose` n'existe pas



    est_ce_que( question1, affirmation2 )

= `question1` est une question oui / non portant sur une `affirmation2`



    inconnue( information1 )

= une `information1` est le point central d'une question



    quoi( question1, information2 )
    lequel( question1, information2, liste3 )
    qui( question1, information2 )
    quand( question1, information2 )
    a_quelle_fréquence( question1, information2 )
    comment( question1, information1 )

= une `question1` porte sur une `information2`



    pose_question( question1, agent2, agent3 )

= un `agent2` pose une `question1` à un `agent3`



    se_demande( question1, agent2 )

= un `agent2` pose une `question1` à lui-même



    répond( réponse1, question2, agent3, agent4 )

= un `agent3` donne une `réponse1` à la `question2` posée par un `agent4`



    se_répond( réponse1, question2, agent3 )

= un `agent3` donne une `réponse1` à sa propre `question2`



    ordre_faire( agent1, action2 )
    ordre_ne_pas_faire( agent1, action2 )

= un `agent1` a l'ordre de faire / ne pas faire une `action2`



    et( affirmation1, affirmation2, affirmation3 )
    ou( affirmation1, affirmation2, affirmation3 )

= une `affirmation1`est vraie si `affirmation2` et / ou `affirmation3` sont vraies



    non( affirmation1, affirmation2 )

= une `affirmation1`est vraie si une `affirmation2` est fausse et vice-versa



    il_est_vrai( affirmation1 )
    il_est_faux( affirmation1 )

= telle `affirmation1` est vraie / fausse



    il_est_probable( affirmation1, probabilité2 )

= il y a une `probabilité2` que telle `affirmation1` soit vraie



    il_est_probable_si( affirmation1, probabilité2, condition3 )

= il y a une `probabilité2` que telle `affirmation1` soit vraie si une `condition3` est vraie



    veut_vrai( agent1, situation2, intensité3 )
    veut_faux( agent1, situation2, intensité3 )

= un `agent1` veut avec `intensité3` qu'une `situation2` soit vraie / fausse



    veut_faire( agent1, action2, situation3, intensité4 )
    ne_veut_pas_faire( agent1, action2, situation3, intensité4 )

= un `agent1` veut / ne veut pas avec `intensité4` faire / ne pas faire une `action2` pour atteindre / éviter une `situation3`



    doit_faire( agent1, action2, raison3, importance4 )
    ne_doit_pas_faire( agent1, action2, raison3, importance4 )

= un `agent1` doit faire / ne doit pas faire une `action2` pour une `raison3` avec `importance4`



    peut_faire( agent1, action2, moyen3, facilité4 )

= un `agent1` peut faire une `action2` grâce à un `moyen3` avec `facilité4`



    ne_peut_pas_faire( agent1, action2, obstacle3, difficulté4 )

= un `agent1` ne peut pas faire une `action2` à cause d'un `obstacle3` avec `difficulté4`



    croit_vrai( agent1, affirmation2, raison3, conviction4 )
    croit_faux( agent1, affirmation2, raison3, conviction4 )

= un `agent1` a la `conviction4` pour une `raison3` qu'une `affirmation2` est vraie / fausse



    sait_vrai( agent1, affirmation2, raison3 )
    sait_faux( agent1, affirmation2, raison3 )

= un `agent1` a la conviction totale pour une `raison3` qu'une `affirmation2` est vraie / fausse



    dit_vrai( agent1, affirmation2 )
    dit_faux( agent1, affirmation2 )

= un `agent1` dit qu'une `affirmation2` est vraie / fausse



    doit_vrai( situation1, raison2, importance3 )
    doit_faux( situation1, raison2, importance3 )

= une `situation1` doit être vraie / fausse pour une `raison2` avec `importance3`



    inutile_vrai( situation1, raison2 )
    inutile_faux( situation1, raison2 )

= pour une `raison2` il n'est pas nécessaire qu'une `situation1` soit vraie / fausse



    peut_vrai( situation1, moyen2, facilité3 )
    peut_faux( situation1, moyen2, facilité3 )

= il est possible qu'une `situation1` soit vraie / fausse par un `moyen2` avec `facilité3`



    ne_peut_pas_vrai( situation1, obstacle2, difficulté3 )
    ne_peut_pas_faux( situation1, obstacle2, difficulté3 )

= il est ipossible qu'une `situation1` soit vraie / fausse à cause d'un `obstacle2` avec `difficulté3`



    en_train_de( agent1, action2, temps3 )

= un `agent1` est en train de faire une `action2` pendant un `temps3`



    se_termine_avant( temps1, temps2 )
    se_termine_quand_commence( temps1, temps2 )
    se_termine_pendant( temps1, temps2 )
    commence_quand_commence( temps1, temps2 )
    se_déroule_pendant( temps1, temps2 )
    se_termine_quand_se_termine( temps1, temps2 )
    se_déroulent_simultanément( temps1, temps2 )

= un `temps1` se déroule ... un autre `temps2`



    temps_instant( temps1, instant2 )

= le `temps1` commence et se termine à un `instant1`



    entre_instant_instant( temps1, instant2, instant3 )

= le `temps1` s'étend d'un `instant1` à un `instant2`



    maintenant( instant1 )

= un `instant1` est exactement maintenant



    vrai_pendant( situation1, temps2 )
    faux_pendant( situation1, temps2 )

= une `situation1` est vraie / fausse pendant un `temps2`













